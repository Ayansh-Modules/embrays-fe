import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import Services from "./Pages/Services";
import HowItWorks from "./Pages/HowItWorks";
import Root from "./Root";
// import Testing from "./Pages/Testing.jsx";
import TermsAndCondition from "./Pages/TermsAndCondition";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/#aboutus" element={<AboutUs />}></Route >
          <Route path="/#services" element={<Services />}></Route >
          <Route path="/#howitworks" element={<HowItWorks />}></Route >
        </Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndCondition />}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
