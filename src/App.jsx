import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Menus from "./Components/Menus/menus"
import Banner from "./Components/Banners/Banner"
import Banner2 from "./Components/Banners/Banner2"
import Banner3 from "./Components/Banners/Banner3"
import Footer from "./Components/Footer/Footer"

function App() {
  

  return (
    
      <main className="overflow-x-hidden">
        <Navbar/>
        <Hero/>
        <Menus/>
        <Banner/>
        <Banner2/>
        <Banner3/>
        <Footer/>
      </main>
       
  )
}

export default App
