import { useContext } from 'react'
import LanguageSelector, { LanguageContext } from './LanguageSelector'
import Link from 'next/link'
import useBreakpoint from '../hooks/useBreakpoint'

export default () => {
  const breakpoint = useBreakpoint()
  const { language } = useContext(LanguageContext)
  const content = pageContent[language]
  return (
    <footer className="px-3">
      <div className="flex flex-wrap md:flex-no-wrap items-baseline border-t-2 border-sand max-w-6xl py-12 mx-auto">
        <div className="w-full mb-6 md:mb-0">
          <p className="mb-3">
            {content.createdby}{' '}
           <a
             href="https://blackbrownberlin.com"
             target="_blank"
             rel="noopener"
            >
              Black Brown Berlin
            </a>
            {' '}{' '}
            {content.for}{' '}
             folx who love good times shared over a meal.
            {'. '}
          </p>

          <p>
            {content.os}
            {' ⟶ '}
            <a
              className="ml-1"
              href="https://github.com/tristan-blackbrownberlin/dineblack"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="flex-shrink-0 relativ">
          <LanguageSelector />
          <div className="text-left md:text-right mt-4">
            <a href="https://www.instagram.com/blackbrownberlin/" target="_blank" rel="noopener">
              <img src="/assets/instagram.svg" alt="Instagram" width="24"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const NavLink = ({ href, label }) => (
  <Link href={href}>
    <a className="font-medium mx-3">{label}</a>
  </Link>
)

const pageContent = {
  'de-DE': {
    createdby: 'Umgesetzt von',
    for: "für",
    inspired: 'Inspiriert von ',
    built: 'Im Original von',
    os: 'Möchtest du mithelfen oder hast du einen Fehler gefunden?',
  },
  'en-GB': {
    createdby: 'Adapted by',
    for: "for",
    inspired: 'Inspired by',
    built: 'Originally built by',
    os: "Want to contribute or found a bug?",
  },
}
