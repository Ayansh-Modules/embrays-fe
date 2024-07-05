import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Root from "./Root";
// import Testing from "./Pages/Testing.jsx";

// import TermsAndCondition from "./Pages/TermsAndCondition";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
     {/* <BrowserRouter>
     <Routes>
     <Route path="/" element={}></Route>
     </Routes>
     </BrowserRouter> */}
     <Header />  
     <Root />
     <Footer />
      {/* <TermsAndCondition /> */}
    </>
  );
}

export default App;
