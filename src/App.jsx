import  {React,useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
       <Header />
       <Aboutus/>
       <Services />
       <Whyus/>
       <HowItWorks />
       <Collaboration />
       <ClientReview />
       <Partnership />
       <Contact />
       <Footer />
    </>
  )
}

export default App
