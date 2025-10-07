// import { useContext, useEffect, useState } from 'react'

import { useState } from 'react'
// import Header from './components/Header'
import SearchBar from './SearchBar'
import RegionFilter from './RegionFilter'
import CountriesContainer from './CountriesContainer'
// import { themeContext } from '../contexts/ThemeContext'
// import {useGetWindowSize } from '../hooks/useWindowSize'
import { useTheme } from '../hooks/useTheme'
// import { useButton } from '../hooks/useButton'
import {useCount} from '../hooks/useCount'
import { useFetch } from '../hooks/useFetch'
import { useToggle } from '../hooks/useToggle'

export default function Home() {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('All Country')

  // const[width, setWidth] = useState(window.innerWidth) //for width 
  // const[height, setHeight] = useState(window.innerWidth) //for height 
  
  // const windowSize = useGetWindowSize()

//  const a = useContext(themeContext);
//  console.log(a);
//  console.log(themeContext);

  // const[isDarkMode] = useContext(themeContext)
  const[isDarkMode] = useTheme()

  // const [buttonValue, setButtonValue] = useButton()
  
  // const [count, setCount] = useCount()

  // function handleCount() 
  // {
  //   setCount(count+1)
  // }

  // const [user] = useFetch()

  // const [toggling,setToggling] =  useToggle()

  // function handleToggle()
  // {
  //   setToggling(true)
  //   document.body.style.backgroundColor='red'
  // }

//  useEffect(() => 
// {
//   window.addEventListener('resize',function()
//   {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight)
//   })
// }, [])
  return (
    <main className={isDarkMode ? 'dark' : ''}>
      <div className="filter">
        <SearchBar setSearch={setSearch} />
        <RegionFilter region={region} setRegion={setRegion} />
      </div>
      {/* <h1 style={{color:'white', textAlign:'center'}}>{windowSize.width}X{windowSize.height}</h1> */}
      {/* <button onClick={handleCount}>Click</button>
      <h1>You click {count}</h1> */}
      {/* <li>
        {user.map((user) => 
        {
            {user.id}
        })}
      </li> */}
      {/* <h1>User Age:{user.age}</h1>
      <button onClick={handleToggle}>Toggling</button> */}
      <CountriesContainer search={search} region={region} />
    </main> 
  )
}