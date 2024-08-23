import React from 'react'
// import Head from './Home/head'
import Banner from './Banner'
// import Navbar from './Home/Navbar'
import Items from './Clothing'
import Shoes from './Shoes'
import AboutUs from './AboutUs'
import Contact from './Contect'
import Cart from './Cart'
import Footer from './Footer'



const Home = () => {
  return (
    <>
      <Banner />
      <Items />
      <Shoes />
      {/* <Cart/> */}
      <AboutUs />
      <Contact />
      <Footer/>
      {/* <CartApk/> */}

      
      
     </>
  )
}

export default Home
