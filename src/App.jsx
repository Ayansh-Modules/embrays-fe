import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Root from "./Pages/Root";
import TermsAndCondition from "./Pages/TermsAndCondition";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="software development company, custom software development company, software engineering company, java development company, software development services, custom software development services, software outsourcing company, enterprise software development, outsourcing software development companies, top software development companies, custom application development company, healthcare software development company, software design company, software development agency, best software development company, offshore software development company, financial software development company, custom software development firm, iot software development company, mobile software development company, software application development company, saas development company, software product development company, fintech software development company, magento ecommerce development company, software outsourcing services, top game development company, agile software development company, custom software application development services, it software development company, custom software company, web development company, website development company, top web design company, wordpress development company, custom web design company, python development company, website development services, best web development company, ecommerce development company, reactjs development company, web application development company, website design and development company, web development services, wordpress web design company, responsive website development company, top website development company, web development and seo company, web development services company, it company, it consulting firms, it support company, it outsourcing companies, managed it services company, top it companies, local it company, it consulting services company, it solutions company, it service provider companies, largest it services companies, top it service providers, php development company, php web development company, custom php development."
        />
        <Header />
        <Routes>
          <Route path="/" element={<Root />}></Route>
          <Route
            path="/terms-and-conditions"
            element={<TermsAndCondition />}
          ></Route>
        </Routes>
        <Footer />
      </Helmet>
    </>
  );
}

export default App;
