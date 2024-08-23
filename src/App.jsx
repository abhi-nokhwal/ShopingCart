import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Cart from './component/Cart'
import Clothing from './component/Clothing'
import Shoes from './component/Shoes'
import Navbar from './component/Navbar'
import Head from './component/head'
import AboutUs from './component/AboutUs'
import Contact from './component/Contect'
// import Footer from './component/Footer'

function App() {

  return (
    <HashRouter>
      <Head />
      <Navbar/>
      

      <Routes>
        <Route path='/' exact element={<Home />} >
        </Route>

        <Route path='/Cart' element={<Cart/>} >
        </Route>
        <Route path='/Clothing' element={<Clothing/>} >
        </Route>
        <Route path='/Shoes' element={<Shoes/>}>
        </Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>

        <Route path='/Contect' element={<Contact/>}></Route>
      </Routes>
      {/* <AboutUs /> */}
      {/* <Contact /> */}
      {/* <Footer/> */}

    </HashRouter>
  )
}

export default App
