import { useState, useEffect } from 'react'
import countriesData from '../countriesData'
import CountryCard from './CountryCard'
import CountriesShimmer from './CountriesShimmer'

export default function CountriesContainer({ search, region }) {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,capital,flags,region,population'
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))

    // cleanup function
    return () => {
      console.log('Cleanup Function')
    }
  }, [])

  if(countries.length === 0)
  {
    return  <CountriesShimmer/>
  }
  return (
    <>
      
        <div className="country-container">
          {countries
            .filter(
              (country) =>
                country.name.common
                  .toLowerCase()
                  .includes(search.toLowerCase()) &&
                (region === 'All Country' || country.region === region)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.png}
                  population={country.population}
                  region={country.region}
                  data={country}
                />
              )
            })}
        </div>
      
    </>
  )
}
