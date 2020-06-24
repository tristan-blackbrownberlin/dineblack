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
            <p className="max-w-xl text-navy-light text-lg mb-4 whitespace-pre-line">
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
    description: `Die afrikanische Diaspora bezieht sich auf die vielen Gemeinschaften von Menschen afrikanischer Herkunft, die aufgrund historischer Bewegungen auf der ganzen Welt verstreut sind.

    Die afrikanische Diaspora hat 140 Millionen Einwohner, während Afrika 1,2 Milliarden Einwohner hat. Zu den bevölkerungsreichsten Ländern der afrikanischen Diaspora gehören Brasilien, Kolumbien, Amerika, die Dominikanische Republik und Haiti.

    Es gibt eine Verbindung zwischen den Nachkommen von Sklaven in der afrikanischen Diaspora, da ihre Vorfahren aus ähnlichen Gebieten in Afrika kamen und ein ähnliches Schicksal überlebten; Sklaverei und Kolonialisierung.

    Im Wesentlichen wurden sie in verschiedene Länder auf der ganzen Welt gebracht, voneinander und von ihren Heimatländern getrennt. Kulturen in der afrikanischen Diaspora bemühen sich, das, was durch ihre globale Zerstreuung und Kolonialisierung verloren gegangen ist, wieder einzufangen. Viele, die es gewohnt sind, einfach als schwarz angesehen zu werden, suchen nach einer Terminologie, die sie als Individuen kategorisiert, die Mitglieder einer größeren Kultur sind, die nicht nur die Farbe ihrer Haut widerspiegelt. Für Afrikaner in der Diaspora bedeutet Entkolonialisierung, ihre ihnen gestohlene afrikanische Identität zurückzugewinnen und die negativen Ansichten über Afrika zu zerstreuen, die sie sozialisiert haben, um sie unter Kolonialisierung zu halten, und Afrika für seine wahre Schönheit zu sehen.

    Alle gekochten Speisen zeigen eine Sache an, die Liebe zu und für die eigene Gemeinschaft. `,
    contact: 'Anfragen zur Seite oder Technik an ',
  },
  'en-GB': {
    title: 'About',
    description:  `The African diaspora refers to the many communities of people of African descent dispersed throughout the world as a result of historic movements.

    The African diaspora has a population of 140 million while Africa has a population of 1.2 billion.

    The most populated countries in the African diaspora include Brazil, Colombia, America, Dominican Republic, and Haiti.

    There is a connection among the descendants of slaves in the African Diaspora as their ancestors came from similar areas in Africa and survived a similar fate; slavery and colonization.

    Essentially they were taken to different countries around the world, disconnected from one another and their homelands.
    Cultures in the African diaspora strive to re-capture what was lost from their global scattering and colonization.

    Many who are accustomed to being regarded as simply black are adventuring for terminology that categorizes them as individuals who are members of a larger culture which does not simply reflect the colour of their skin.
    For Africans in the Diaspora, decolonization involves reclaiming their African identity that was stolen from them and dispelling the negative views of Africa they have been socialized to hold under colonization, seeing Africa for its true beauty.

    All cooked food indicates one thing, love of and for ones community.`,
    contact: 'Most inquiries and site feedback to ',
  },
}
