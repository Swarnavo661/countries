import { Link } from "react-router-dom";

export default function CountryCard({name, flag,population,region, capital, data}) {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
      <div className="flags-container">
        <img src={flag} alt={name} />
      </div>
      <div className="card-text">
        <h2 className="card-title">{name}</h2>
        <p>
          <strong>Population:</strong>{population}
        </p> 
        <p>
          <strong>Region:</strong>{region}
        </p>
        <p>
          <strong>Capital:</strong>{capital}
        </p>
      </div>
      
    </Link>
  )
}
