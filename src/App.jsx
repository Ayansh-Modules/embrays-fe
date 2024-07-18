import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer2 from "./Components/Footer2";
import Header from "./Components/Header";
// import BlogPage from "./Pages/Blogs/BlogPage";
import ViewAllBlog from "./Pages/Blogs/ViewAllBlog";
import Root from "./Pages/Root";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Embrays_Helmet from "./Utility/Embrays_Helmet";
import {useBlogContext}  from "./Context/BlogContext"
import QRPage from "./Pages/QRGenerator/QRPage";
function App() {
  const {getBlogs} = useBlogContext()
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getBlogs()
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
        ></Route>
        <Route path="/allblog" element={<ViewAllBlog />}></Route>
      </Routes> */}
        <QRPage />
      <Footer2 /> 
    </>
  );
}

export default App;
