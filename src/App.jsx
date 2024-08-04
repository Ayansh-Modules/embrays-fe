import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer2 from "./Components/Footer2";
import Header from "./Components/Header";
import { useBlogContext } from "./Context/BlogContext";
import LinkShortContextProvider from "./Context/LinkShortContext";
import QRContextProvider from "./Context/QRContext";
import ViewAllBlog from "./Pages/Blogs/ViewAllBlog";
import LinkPage from "./Pages/LinkShortener/LinkPage";
import VisitShortUrl from "./Pages/LinkShortener/VisitShortUrl";
import QRPage from "./Pages/QRGenerator/QRPage";
import Root from "./Pages/Root";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Embrays_Helmet from "./Utility/Embrays_Helmet";
function App() {
  const { getBlogs } = useBlogContext();
  const location = useLocation();
  useEffect(async () => {
    AOS.init();
    AOS.refresh();
    if (location.hash) {
      window.location.href = location.hash;
    }
    if (location.pathname.includes("/url/")) {
      const shortCode = location.pathname.split("/")[2];
      const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
      let res = await fetch(VITE_BASE_URL + "/go/" + shortCode, {
          method: "GET"
      });
      if(res.status === 200)
      {
          const data = await res.json();
          window.location.href = data.url;
      }
    }

    getBlogs();
  }, [location]);

  return (
    <>
      <SkeletonTheme baseColor="#000000" highlightColor="#444">
        <QRContextProvider>
          <LinkShortContextProvider>
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
              <Route path="/url/:shortCode" element={<VisitShortUrl />}></Route>
            </Routes>
            <Footer2 />
          </LinkShortContextProvider>
        </QRContextProvider>
      </SkeletonTheme>
    </>
  );
}

export default App;
