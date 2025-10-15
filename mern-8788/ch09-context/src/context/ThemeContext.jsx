import { createContext, useState} from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem'

export const ThemeContext = createContext ()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((Prev) => (Prev === "light" ? "dark" : "light"))
    }

  return (
    <div>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

