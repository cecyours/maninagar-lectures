import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", background: "#282c34", color: "white", padding: "10px" }}>
          My Shopping App (Redux Example)
        </h1>
        <ProductList />
        <Cart />
      </div>
    </>
  )
}

export default App
