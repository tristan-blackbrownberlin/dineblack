import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageSelector'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <>
      <Head />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-auto pt-8 lg:pt-0 pb-16">
          <div className="max-w-6xl flex items-center md:overflow-hidden mx-auto md:mt-10">
            <div className="flex-auto w-128 md:flex-shrink-0 px-3 md:pr-16">
              <h1 className="max-w-xl text-3xl sm:text-5xl leading-none mb-6">
                {content.titleBlue} <br className="hidden sm:inline" />
                <span className="text-pink">{content.titlePink}</span>
              </h1>
              <p className="max-w-xl text-navy-light text-base sm:text-lg md:text-xl mb-8">
                {content.description}
              </p>
              <div className="pr-3 sm:pr-0 sm:-m-2">
                <Link href="/map">
                  <a className="w-full sm:w-auto h-12 btn btn-primary inline-flex items-center mb-3 sm:m-2">
                    {content.find}
                    <span className="inline sm:hidden flex-auto text-right">
                      ⟶
                    </span>
                  </a>
                </Link>
                <Link href="/submit">
                  <a className="w-full sm:w-auto h-12 btn btn-secondary inline-flex items-center sm:m-2">
                    {content.add}
                    <span className="inline sm:hidden flex-auto text-right">
                      ⟶
                    </span>
                  </a>
                </Link>
              </div>
            </div>
            <img
              src="/assets/africa-continent-hero-2x.png"
              alt="Africa Continent Map Hero Img"
              className="hidden md:block w-128"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

const pageContent = {
  'de-DE': {
    titleBlue:
      'Entdecke die einzigartige Weise wie Essen Menschen und Kulturen',
    titlePink: 'in der afrikanischen Diaspora verflechtet',
    description: `Essen bringt Menschen zusammen, verbindet uns und vereinigt Individuuen, Sprachen und Kulturen! Erforsche die diverse Welt der afrikanischen Diaspora -und Esskultur.`,
    find: 'Finde Restaurants',
    add: 'Füg dein Restaurant hinzu',
  },
  'en-GB': {
    titleBlue:
      'Discover the unique way food intertwines the cultures of Europe',
    titlePink: '& the African Diaspora',
    description: `Food brings people together, connecting and transcending individuals, languages and cultures! Explore the diversity of African Diasporic food.`,
    find: 'Find restaurants',
    add: 'Add your restaurant',
  },
}

export default Home
