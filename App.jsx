import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './App.css'

import { themeContext } from './contexts/ThemeContext'

export default function App() {

  return (
    <themeContext.Provider value='swarnavo'>
      <Header />
      <Outlet/>
      
    </themeContext.Provider>
  )
}
