import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Embrays_Helmet from "./Utility/Embrays_Helmet";
import Footer from "./Components/Footer";
import Footer2 from "./Components/Footer2";
import Header from "./Components/Header";
import Root from "./Pages/Root";
import TermsAndCondition from "./Pages/TermsAndCondition";
import BlogPage from "./Pages/Blogs/BlogPage";
import Test from "./Pages/Blogs/Test";
import ViewAllBlog from "./Pages/Blogs/ViewAllBlog";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Embrays_Helmet />
      <Header />
      {/* <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndCondition />}
        >

        </Route>
      </Routes> */}
      <BlogPage />
      {/* <ViewAllBlog /> */}
      {/* <Test /> */}
      {/* <Footer /> */}
      <Footer2/>
    </>
  );
}

export default App;
