import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '../components/LanguageSelector'
import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => {
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <>
      <Head />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-auto px-3 pt-8 sm:pt-16 pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              {content.title}
            </h2>
            <p className="max-w-xl text-navy-light text-lg mb-4">
              {content.description}
              <a href="https://blackbrownberlin.com" target="_blank" rel="noopener">
                Black Brown Berlin
              </a>
              .
            </p>
            <p className="max-w-xl text-navy-light text-lg mb-4">
              {content.contact}
              <a href="mailto:hello@blackbrownberlin.com">hello@blackbrownberlin.com</a>.
              .
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

const pageContent = {
  'de-DE': {
    title: 'Über uns',
    description: `Die COVID-19 Krise hat Berlin's Restaurantszene hart getroffen. Viele Läden mussten zu machen und fangen nacheinander an Lieferungen ihrer normalen oder neuer Gerichte anzubieten. Wir haben diese Seite gebaut um ihnen zu helfen mehr Leute zu erreichen - von `,
    contact: 'Anfragen zur Seite oder Technik an ',
  },
  'en-GB': {
    title: 'About',
    description: `All cooked food indicates one thing, love of and for ones community.   `,
    contact: 'Most inquiries and site feedback to ',
  },
}
