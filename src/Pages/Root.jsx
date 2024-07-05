import React from "react";
import Partnership from "../Components/Partnership";
import AboutUs from "./AboutUs";
import ClientReview from "./ClientReview";
import Collaboration from "./Collaboration";
import Contact from "./Contact";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import WhyUs from "./WhyUs";

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
