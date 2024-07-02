import AOS from "aos";
import "aos/dist/aos.css";
import { React, useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Partnership from "./Components/Partnership";
import Aboutus from "./Pages/AboutUs";
import ClientReview from "./Pages/ClientReview";
import Collaboration from "./Pages/Collaboration";
import Contact from "./Pages/Contact";
import HowItWorks from "./Pages/HowItWorks";
import Services from "./Pages/Services";
import Whyus from "./Pages/WhyUs";
import TermsAndCondition from "./Pages/TermsAndCondition";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <Header />
      <Aboutus />
      <Services />
      <Whyus />
      <HowItWorks />
      <Collaboration />
      <ClientReview />
      <Partnership />
      <Contact />
      <Footer /> */}
      <TermsAndCondition />
    </>
  );
}

export default App;
