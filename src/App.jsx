import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Header from "./Components/Header";
import BlogPage from "./Pages/Blogs/BlogPage";
import Root from "./Pages/Root";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Embrays_Helmet from "./Utility/Embrays_Helmet";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Embrays_Helmet />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Root /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/terms-and-conditions"
          element={
            <>
              <TermsAndCondition />
              <Footer />{" "}
            </>
          }
        ></Route>

        <Route
          path="/blog"
          element={
            <>
              <BlogPage />
              <Footer2 />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
