import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer2 from "./Components/Footer2";
import Header from "./Components/Header";
import { useBlogContext } from "./Context/BlogContext";
import ViewAllBlog from "./Pages/Blogs/ViewAllBlog";
import LinkPage from "./Pages/LinkShortener/LinkPage";
import QRPage from "./Pages/QRGenerator/QRPage";
import Root from "./Pages/Root";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Embrays_Helmet from "./Utility/Embrays_Helmet";
import QRContextProvider from "./Context/QRContext"
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
function App() {
  const { getBlogs } = useBlogContext();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    getBlogs();
  }, []);

  return (
    <>
     <SkeletonTheme baseColor="#000000" highlightColor="#444">
    <QRContextProvider>
      <Embrays_Helmet />
      <Header />
      <Routes>
        <Route path="/" element={<Root />}></Route>
        <Route
          path="/terms-and-conditions"
          element={<TermsAndCondition />}
        ></Route>
        <Route path="/allblog" element={<ViewAllBlog />}></Route>
        <Route path="/qr-generator" element={<QRPage />}></Route>
        <Route path="/link-shortener" element={<LinkPage />}></Route>
      </Routes>
      <Footer2 />
      </QRContextProvider>
      </SkeletonTheme>
    </>
  );
}

export default App;
