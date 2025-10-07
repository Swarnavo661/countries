export default function SearchBar({setSearch}) {
  return (
    <div className="search-wrapper">
      <i className="fa fa-search"></i>
      <input onChange={(e) => setSearch(e.target.value)} type="text" id="search" placeholder="search for your country" />
    </div>
  )
}
