import { useState } from 'react'

export default function Header() {
  const [DarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  
  if(DarkMode)
  {
    document.body.classList.add('dark-mode')
  }
  else 
  {
    document.body.classList.remove('dark-mode')
  }
  const handleDarkMode = () => {
    setDarkMode(!DarkMode)

    localStorage.setItem('isDarkMode',!DarkMode)
  }
  return (
    <header>
      <a href="#">Where is the World?</a>
      <div className="themeChanger" onClick={handleDarkMode}>
        {DarkMode ? (
          <>
            <i className="bx bxs-sun"></i>&nbsp; Light Mode
          </>
        ) : (
          <>
          <i className="bx bx-moon"></i>&nbsp; Dark Mode
          </>
        )}
      
      </div>
    </header>
  )
}
