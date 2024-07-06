import { useState } from "react";
import React from "react";
import Partnership from "../Components/Partnership";
import AboutUs from "./AboutUs";
import ClientReview from "./ClientReview";
import Collaboration from "./Collaboration";
import Contact from "./Contact";
import HowItWorks from "./HowItWorks";
import Services from "./Services";
import WhyUs from "./WhyUs";
import Snackbar from "../Components/Snackbar";
function Root() {
  // const[openSnackbar,setOpenSnackbar]= useState(false)
  // function handleClick(){
  //   setOpenSnackbar(true)
  //   setTimeout(()=>{
  //     setOpenSnackbar(false)
  //   },4000)
  // }

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
// OpenSnackbar={handleClick()} onClose={setOpenSnackbar(false)}
// OpenSnackbar={handleClick()} onClose={setOpenSnackbar(false)}