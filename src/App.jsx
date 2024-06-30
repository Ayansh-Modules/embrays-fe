import React from 'react'
import Header from './Components/Header'
import Aboutus from './Pages/AboutUs'
import Services from './Pages/Services'
import Whyus from './Pages/WhyUs'
import HowItWorks from './Pages/HowItWorks'
import Collaboration from './Pages/Collaboration'
import ClientReview from './Pages/ClientReview'
import Partnership from './Components/Partnership'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
       <ClientReview />
       <Header />
       <Aboutus/>
       <Services />
       <Whyus/>
       <HowItWorks />
       <Collaboration />
       <Partnership />
       <Contact />
       <Footer />
    </>
  )
}

export default App
