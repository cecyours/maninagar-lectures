import './App.css'
import MComp from './components/ClassBased'
import Footer from './components/Footer'
import FunctionalBased from './components/FunctionalBased'
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        {/* <MComp />  */}

        {/* <FunctionalBased /> */}
        
        <UserCard name={"Rosewin"} age={18} /> 
        <UserCard name={"Raju"} age={45} /> 

        
        <Footer />
      </div>
    </>
  )
}

export default App
