import { useContext } from 'react'
import { useRouter } from 'next/router'
import Promise from 'promise-polyfill'

import Head from '../../components/Head'
import Nav from '../../components/Nav'
import Map from '../../components/Map'
import CitySelection from '../../components/CitySelection'
import cities from '../../constants/cities'
import { LanguageContext } from '../../components/LanguageSelector'

const pageContent = {
  'de-DE': {
    errorMessages: {
      NOT_FOUND: 'Diese Stadt konnte nicht gefunden werden',
      DEFAULT: 'Es ist ein Fehler aufgetreten',
    },
  },
  'en-GB': {
    errorMessages: {
      NOT_FOUND: 'This city could not be found',
      DEFAULT: 'An error occured',
    },
  },
}

export default ({ restaurants, error }) => {
  const router = useRouter()
  const { city } = router.query
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]

  const errorMessage = error ? content.errorMessages[error.error] : null
  return (
    <>
      <Head />
      <div className="h-screen flex flex-col">
        <Nav />
        <main className="flex-auto">
          <div className="px-3 mb-2">
            <CitySelection path="map" />
          </div>
          {!error && <Map restaurants={restaurants} cityName={city} />}
          {!restaurants && !error && (
            <div className="w-full h-full flex items-center justify-center text-3xl text-pink">
              <LoadingSpinner />
            </div>
          )}
          {error && (
            <div className="w-full h-full flex items-center justify-center text-xl">
              {errorMessage}
            </div>
          )}
        </main>
      </div>
    </>
  )
}

export async function getStaticProps({ params: { city } }) {
  const airtableApiKey = process.env.AIRTABLE_API_KEY
  const airtableBaseKey = process.env.AIRTABLE_BASE_KEY
  let error = null
  let restaurants = null

  const Airtable = require('airtable')
  const airtable = new Airtable({
    apiKey: airtableApiKey,
  }).base(airtableBaseKey)
  const base = await airtable(city)
  const records = await base
    .select({
      maxRecords: 999999, // don't want to paginate...
      view: 'Grid view', // NOTE: changing the view name will break things
      fields: [
        'name',
        'description',
        'offerings',
        'delivery',
        'phone',
        'url',
        'email',
        'location',
      ],
      filterByFormula: "display = '1'",
    })
    .all()
    .catch(e => {
      error = { error: e.error, message: e.message, statusCode: e.statusCode }
    })

  if (!error) {
    restaurants = await Promise.all(
      records.map(record => {
        const info = record.fields
        info.id = record.id
        return info
      })
    )
  }

  return { props: { restaurants, error } }
}

export async function getStaticPaths() {
  const citiesArr = Object.values(cities)
  const paths = citiesArr.map(({ name: city }) => ({ params: { city } }))
  return {
    paths,
    fallback: false,
  }
}

// Dont need this anymore as locaation encoding happens in Airtable but
// keeping for future reference and could build to do geolcation and store in Airtable here

// if(process.env.NODE_ENV === 'production') {
//   let i = -1
//   for await (let restaurant of restaurants) {
//     i++
//     await fetch(
//       'https://maps.googleapis.com/maps/api/geocode/json?address=' +
//         encodeURI(restaurant.address) +
//         '&key=' +
//         googleMapsApiKey
//     ).catch(err => {
//       console.log(err)
//     }).then(res => {
//       return res.json()
//     }).then(json => {
//       const positionData = json
//       if (positionData) restaurants[i].positionData = positionData
//     })
//   }
// }
