//hooks
import { useEffect } from "react"

import AppStore from "./components/AppStore/AppStore"
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Testimonial from "./components/Testimonial/Testimonial"

//AOS
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    AOS.init({
      offset:200,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
      
    }

    )

  }, [])
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App