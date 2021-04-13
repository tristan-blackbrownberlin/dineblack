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
              <a href="https://1305.digital/" target="_blank" rel="noopener">
                Find out more about 1305 Digital
              </a>
              .
            </p>
            <p className="max-w-xl text-navy-light text-lg mb-4">
              {content.contact}
              <a href="mailto:hello@1305.digital">hello@1305.digital</a>.
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
    description:  `Join mailing list 

    We are setting out to bring awareness to Black owned businesses and to highlight the restaurants and food and beverage influencers of the African diaspora worldwide. This project is Black owned and operated, open source and relies on community information and the work of countless creators previous innovations to exist. 
    
    Support your local Black eateries and help these Black owned restaurants keep the lights on by checking out your cities directory listings, ordering takeout, tipping well and while you’re here, joining our mailing list to stay updated. If you don’t see your fav Black owned restaurant or spot please nominate the owners and help us spread the word - tell the owners and all your friends about us. 
    
    SUPPORT YOUR LOCAL BLACK OWNED RESTAURANTS DURING THE LOCKDOWN BY GETTING TAKE-OUT
    
    Your local Black owned food joints are struggling during the current crisis — but they're still cooking! Help them keep the lights on, by getting take-out from the best restaurants in your area.
    
    Join Our Mailing List
    
    We are currently in these cities and are planning to curate and maintain these sites worldwide. 
    Berlin
    Los Angeles
    New York
    Philladelphia
    New Jersey
    Seattle
    London
    Paris
    Amsterdam
    Miami
    New Orleans
    
    SERVICES

    In addition to providing these directories of Black Owned Restaurants and highlighting F&B Influencers of the African Diaspora, The Diaspora Eats (TDE) was established in 2020 in resonse to our global situation and actively contributes to the digitization of the hospitality sector. An international team of experts implements a variety of digital solutions and innovations for hotels, restaurants, caterers, festivals, f&b influencers and trader businesses.
    
    Are you interested in a new order system? 
    We see & understand that the current situation is chaotic and comes with many new challenges.
    
    We have launched 1305.digital to help you Go Digital with QR code enabled digital menus and a full digital ordering system. Sign up at <a href="https://1305.digital/" target="_blank" rel="noopener"> for a digital ordering system that is made for times like these and supercharge the ordering experience for your business. 
    
    
    Join Our Mailing List `,
    contact: 'We decided to kick off this exciting project in our home town of Berlin. We are very interested in expanding and providing this resource to other cities in Germany and Europe. Tell us more, inquiries and site feedback to ',
  },
}
