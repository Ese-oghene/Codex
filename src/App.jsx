import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from "react-router-dom";
import { AppProviders } from "./context";

import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Subscriptions from "./pages/Subscriptions";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from './components/footer';
import ProductDetails from './pages/ProductDetails';
import Cart from "./pages/Cart";
import Checkout from './pages/Checkout';


function App() {
  

  return (
    <>
      <AppProviders>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/checkout" element={<Checkout />} />
      </Routes>
    <Footer />
    </AppProviders>
    </>
  )
}

export default App