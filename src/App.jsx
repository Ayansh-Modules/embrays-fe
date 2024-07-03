import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Partnership from "./Components/Partnership";
import AboutUs from "./Pages/AboutUs";
import ClientReview from "./Pages/ClientReview";
import Collaboration from "./Pages/Collaboration";
import Contact from "./Pages/Contact";
import HowItWorks from "./Pages/HowItWorks";
import Services from "./Pages/Services";
import WhyUs from "./Pages/WhyUs";
// import Testing from "./Pages/Testing.jsx";

// import TermsAndCondition from "./Pages/TermsAndCondition";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      {/* <Testing />
    <Testing /> */}
      <Header />
      <AboutUs />

      <Services />
      <WhyUs />
      <HowItWorks />
      <Collaboration />
      <ClientReview />
      <Partnership />
      <Contact />
      <Footer />
      {/* <TermsAndCondition /> */}
    </>
  );
}

export default App;
