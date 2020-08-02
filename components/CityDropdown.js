import Link from 'next/link'
import citiesObj from '../constants/cities'

export default ({ path }) => {
  const cities = citiesObj.map(city => {
    return (
      <li key={city}>
        <Link href="/list/[city]" as={`/${path}/${city}`}>
          <a className="group flex font-medium mr-8 my-2">
            {city}
            <span className="flex-auto text-right text-sand-light group-hover:text-navy-light transition-color duration-150 ease-in-out">
              ⟶
            </span>
          </a>
        </Link>
      </li>
    )
  })

  return (
    <div className="w-full mb-8">
      <ul className="flex flex-initial flex-wrap">{cities}</ul>
    </div>
  )
}
