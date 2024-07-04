import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
// import HowItWorks from "./Pages/HowItWorks";
import Partnership from "./Components/Partnership";
import ClientReview from "./Pages/ClientReview";
import Collaboration from "./Pages/Collaboration";
import Services from "./Pages/Services";
// import Contact from "./Pages/Contact";
// import WhyUs from "./Pages/WhyUs";
// import Testing from "./Pages/Testing.jsx";
// import Footer from "./Components/Footer";

// import TermsAndCondition from "./Pages/TermsAndCondition";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <AboutUs />
      <Services />
      {/* <WhyUs /> */}
      <Collaboration />
      <ClientReview />
      <Partnership />
      {/* <HowItWorks /> */}
      {/* 
  

      <Collaboration />
      <ClientReview />
      <Partnership />
      <Contact />
      <Footer /> */}
      {/* <TermsAndCondition /> */}
    </>
  );
}

export default App;
