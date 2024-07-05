import React from "react";
import Partnership from "./Components/Partnership";
import AboutUs from "./Pages/AboutUs";
import ClientReview from "./Pages/ClientReview";
import Collaboration from "./Pages/Collaboration";
import Contact from "./Pages/Contact";
import HowItWorks from "./Pages/HowItWorks";
import Services from "./Pages/Services";
import WhyUs from "./Pages/WhyUs";
function Root() {
  return (
    <div>
      <AboutUs />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Collaboration />
      <ClientReview />
      <Partnership />
      <Contact />
    </div>
  );
}

export default Root;
