
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Layout from './pages/Layout.jsx'
import Profile from './pages/Profile.jsx'
import Users from './pages/Users.jsx'
import Analytics from './pages/Analytics.jsx'
import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Dashboard' element={<Layout />} >
        <Route index element={<Analytics />} />
        <Route path='profile' element={<Profile />} />
        <Route path='users' element={<Users />} />

      </Route>
      <Route path='/products' element={<Products />} />

      <Route path='/products/:id' element={<ProductDetail />} />

    </Routes>

  </BrowserRouter>

)
//npm i react-router
//npm i react-router-dom