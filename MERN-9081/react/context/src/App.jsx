import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Profile />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
