import React from "react";
const AboutUs = React.lazy(() => import('./AboutUs'));
const Services = React.lazy(() => import('./Services'));
const HowItWorks = React.lazy(() => import('./HowItWorks'));
const WhyUs = React.lazy(() => import('./WhyUs'));
const Collaboration = React.lazy(() => import('./Collaboration'));
const ClientReview = React.lazy(() => import('./ClientReview'));
const Partnership = React.lazy(() => import('../Components/Partnership'));
const Posts = React.lazy(() => import('./Posts'));
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
      <Posts />
    </div>
  );
}

export default Root;
// OpenSnackbar={handleClick()} onClose={setOpenSnackbar(false)}
// OpenSnackbar={handleClick()} onClose={setOpenSnackbar(false)}
