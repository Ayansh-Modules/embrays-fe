import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer2 from "./Components/Footer2";
import Header from "./Components/Header";
import LinkShortContextProvider from "./Context/LinkShortContext";
import QRContextProvider from "./Context/QRContext";
import LinkPage from "./Pages/LinkShortener/LinkPage";
import VisitShortUrl from "./Pages/LinkShortener/VisitShortUrl";
import QRPage from "./Pages/QRGenerator/QRPage";
import Root from "./Pages/Root";
import TermsAndCondition from "./Pages/TermsAndCondition";
import Embrays_Helmet from "./Utility/Embrays_Helmet";
import React, { lazy, Suspense } from "react";
function App() {
  const location = useLocation();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (location.hash) {
      window.location.href = location.hash;
    }

    redirectUrl();
  }, [location]);
  //redirect to the original url
  async function redirectUrl() {
    if (location.pathname.includes("/url/")) {
      const shortCode = location.pathname.split("/")[2];
      const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
      let res = await fetch(VITE_BASE_URL + "/go/" + shortCode, {
        method: "GET",
      });
      if (res.status === 200) {
        const data = await res.json();
        window.location.href = data.url;
      }
    }
  }

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
