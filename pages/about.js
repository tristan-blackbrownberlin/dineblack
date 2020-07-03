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
              <a href="https://www.instagram.com/misskendrav/" target="_blank" rel="noopener">
                Find out more about Kendra
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
    description:  `Home.
For some, it's a physical place.
For others, its a state of mind, a feeling.

And yet for myself and countless others, it's a loaded concept that they grapple with and try to define and find all at once.

How is this idea of 'home' further compounded for not only a person but a 'black person' of the African Diaspora?

Some of us moved to another country willingly to build a better life for our families. Far more of us were transported unwillingly and landed on distant shores- leaving much of our heritage behind.
Yet, we all understand that nagging feeling of simultaneously belonging to a place and the persistent knowledge of not.

So then what is 'home'?

Though definitions can vary, one doesn't fully understand the significance of home until you are away from it- whether it is your first time sleeping over at a friend's at five or moving across the globe at 25.

I know this first hand.

There was no specific place for me to connect to this feeling of homesickness. I soon realized that 90% of the time, it manifested itself as an aching for the food I knew and loved.

There was (and still is) no greater comfort to me than the fried catfish and collard greens, I instinctually know. They bring my heart & soul back to this familiar place.

Those dishes might be Afro-American soul food, but as my global reach broadened, and knowledge of the Diaspora therein, I was able to find solace elsewhere as well…

It came on the streets of London at the Notting Hill Carnival via a plate of Callaloo, greens scooped up and piled high on a paper plate by a kind-faced Jamaican woman that laughed when she saw my eyes light up as she handed it over. With each bite, I knew that moment was exactly where I was supposed to be.

It came at a friend's home in Berlin, where I enjoyed a meal of traditional Nigerian food. I thought the cuisine was foreign to me until I tasted his stewed greens. He excused them as 'not being like his moms', but he tried to do it from memory. It might have been a simple version of Efo Riro, maybe not. Nonetheless, there's something to be said for muscle memory-because they tasted like home to me.

And it was resurrected at 'home' in Stockholm when I discovered I could replace my beloved collard greens with Tuscan black kale and other greens to get tremendous results that warmed my heart and belly just as well.

It is no coincidence that these greens cooked by fellow black folks felt just right to me. Despite varying so much in the specific ingredients, the same 'flavor' was still there- and by flavor, I don't mean seasonings. I mean something far more guttural, something that only the soul can recognize.

So with that- I implore my brother & sisters of the Diaspora to embrace, explore, and support the food being prepared by our kin right here in our backyard.

No matter your definition of home- I'm quite sure a comforted belly is part of it.

Words by Kendra Valentine - Story strategist, food nerd, and producer/presenter of the award-winning Americulinariska Youtube cooking series `,
    contact: 'We decided to kick off this exciting project in our home town of Berlin. We are very interested in expanding and providing this resource to other cities in Germany and Europe. Tell us more, inquiries and site feedback to ',
  },
}
