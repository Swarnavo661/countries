import { useEffect, useState } from 'react';
import './CountryDetails.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import CountryDetailsShimmer from './CountryDetailsShimmer';

export default function CountryDetails() {
  const params = useParams();
  const { state } = useLocation();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  function updateCountryData(data) {
    const formattedData = {
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common || data.name.common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital || [],
      flag: data.flags.svg,
      tld: data.tld,
      languages: data.languages ? Object.values(data.languages).join(', ') : 'N/A',
      currencies: data.currencies
        ? Object.values(data.currencies).map((c) => c.name).join(', ')
        : 'N/A',
      borders: []
    };

    if (!data.borders) {
      setCountryData(formattedData);
      return;
    }

    Promise.all(
      data.borders.map((border) =>
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common)
      )
    ).then((borders) => {
      setCountryData({ ...formattedData, borders });
    });
  }

  useEffect(() => {
    if (state) {
      updateCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => updateCountryData(data))
      .catch((error) => {
        console.error(error);
        setNotFound(true);
      });
  }, [countryName, state]);

  if (notFound) return <p>Country Not Found</p>;
  if (countryData === null) return <CountryDetailsShimmer />;

  return (
    <main>
      <div className="country-details-container">
        <span className="back-button" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          {!imageLoaded && <div className="shimmer-image"></div>}
          <img
            className="detailsImage"
            src={countryData.flag}
            alt={`${countryData.name} flag`}
            style={{ display: imageLoaded ? 'block' : 'none' }}
            onLoad={() => setImageLoaded(true)}
          />

          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p><b>Native Name:</b> {countryData.nativeName}</p>
              <p><b>Population:</b> {countryData.population.toLocaleString('en-IN')}</p>
              <p><b>Region:</b> {countryData.region}</p>
              <p><b>Sub Region:</b> {countryData.subregion}</p>
              <p><b>Capital:</b> {countryData.capital.join(', ')}</p>
              <p><b>Top Level Domain:</b> {countryData.tld}</p>
              <p><b>Currencies:</b> {countryData.currencies}</p>
              <p><b>Languages:</b> {countryData.languages}</p>
            </div>

            {countryData.borders.length > 0 && (
              <div className="border-countries">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`}>{border}</Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
