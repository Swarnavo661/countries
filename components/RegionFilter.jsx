export default function RegionFilter({region, setRegion}) {
  return (
    <select id="region-filter" value={region} onChange={(e) => setRegion(e.target.value)}>
      <option value="All Country">All Country</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option> 
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option> 
      <option value="Oceania">Oceania</option>
    </select>
  )
}
