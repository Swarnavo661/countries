import { useContext } from 'react'
import { themeContext } from '../contexts/ThemeContext'



export function useTheme()
{
    const[isDarkMode, setIsDarkMode] = useContext(themeContext)

    return [isDarkMode, setIsDarkMode]
}