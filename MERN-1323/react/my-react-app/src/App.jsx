import './App.css'
import MComp from './components/ClassBased'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <MComp /> 

        
        <Footer />
      </div>
    </>
  )
}

export default App
