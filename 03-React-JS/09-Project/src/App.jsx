import { Route } from "react-router-dom"
import Products from "./Products"
import { Routes } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"



const App = () => {



  return (

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />

      <Route path="/cart" element={<Cart />} />

    </Routes>
  )
}

export default App