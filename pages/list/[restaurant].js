import React, { useContext, useEffect, useState } from 'react'
import { useRouter, Router } from 'next/router'
import Link from 'next/link'
import Head from '../../components/Head'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LoadingSpinner from '../../components/LoadingSpinner'
import Map from '../../components/Map'
import { LanguageContext } from '../../components/LanguageSelector'

const pageContent = {
  'en-GB': {
    goBackLabel: 'Go back',
    addressLabel: 'Address',
    offersLabel: 'Offers',
    websiteLabel: 'Order',
  },
  'de-DE': {
    goBackLabel: 'Zurück',
    addressLabel: 'Addresse',
    offersLabel: 'Angebote',
    websiteLabel: 'Bestellen',
  },
}

const Restaurant = () => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  const router = useRouter()
  const restaurantName = router.query.restaurant
  const [restaurant, setRestaurant] = useState()

  useEffect(() => {
    ;(async () => {
      if (restaurantName) {
        const airtableApiKey = process.env.AIRTABLE_API_KEY
        const airtableBaseKey = process.env.AIRTABLE_BASE_KEY

        const Airtable = require('airtable')
        const airtable = new Airtable({
          apiKey: airtableApiKey,
        }).base(airtableBaseKey)
        const base = await airtable('Restaurants')
        const records = await base
          .select({
            maxRecords: 999999, // don't want to paginate...
            view: 'Grid view', // NOTE: changing the view name will break things
            fields: [
              'name',
              'address',
              'description',
              'offerings',
              'delivery',
              'phone',
              'url',
              'neighbourhood',
              'email',
              'location',
            ],
            filterByFormula: `name = '${restaurantName}'`,
          })
          .all()
        setRestaurant(records[0].fields)
      }
    })()
  }, [restaurantName])
  return (
    <>
      <Head />
      <div className="min-h-screen flex flex-col">
        <Nav />
        {!restaurant && <LoadingSpinner />}
        {!!restaurant && (
          <main className=" px-3 pt-8 pb-16">
            <div className="flex-auto w-full max-w-6xl mx-auto">
              <button
                className="btn btn-primary mb-8"
                onClick={() => router.back()}
              >
                ⟵&nbsp;&nbsp;&nbsp;{content.goBackLabel}
              </button>

              <div className="w-full bg-white p-8 rounded-lg">
                {restaurant.name && (
                  <h2 className="flex-auto font-extrabold text-2xl sm:text-3xl leading-none mb-4 sm:mb-6">
                    {restaurant.name}
                  </h2>
                )}
                {restaurant.description && (
                  <p className="flex-auto text-base sm:text-xl mb-4">
                    {restaurant.description}
                  </p>
                )}
                {restaurant.delivery && (
                  <div className="font-medium text-sm  mb-4 ">
                    ✓ Delivery available
                  </div>
                )}
                {restaurant.offerings && (
                  <ul className="flex-auto">
                    {restaurant.neighbourhood && (
                      <li className="inline-block font-medium text-sm sm:text-base bg-sand p-2 my-2 mr-2">
                        {restaurant.neighbourhood}
                      </li>
                    )}
                    {restaurant.offerings.map((offer, idx) => {
                      return (
                        <li
                          key={idx}
                          className="inline-block font-medium text-sm sm:text-base bg-teal p-2 my-2 mr-2"
                        >
                          {offer}
                        </li>
                      )
                    })}
                  </ul>
                )}

                <div className="my-2">
                  {restaurant.address && (
                    <p className="font-medium mb-1">{restaurant.address}</p>
                  )}

                  {restaurant.location && (
                    <Map
                      restaurants={[restaurant]}
                      height="350px"
                      center={restaurant.location}
                    />
                  )}
                </div>
                {restaurant.url && (
                  <a
                    href={
                      restaurant.url.includes('http')
                        ? restaurant.url
                        : 'https://' + restaurant.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full text-sm sm:text-base py-4 my-2"
                  >
                    {content.websiteLabel}&nbsp;&nbsp;&nbsp;⟶
                  </a>
                )}
              </div>
            </div>
          </main>
        )}
      </div>
      <Footer />
    </>
  )
}
export default Restaurant
