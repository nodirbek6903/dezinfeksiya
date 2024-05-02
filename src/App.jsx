import About from "./components/About/About";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import XizmatTuri from "./components/XizmatTuri/XizmatTuri";
import Xizmatlar from "./components/Xizmatlar/Xizmatlar";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
function App() {
  const { t,i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if(savedLanguage){
      i18n.changeLanguage(savedLanguage)
    }else{
      localStorage.setItem("language","en")
      i18n.changeLanguage("en")
    }
  },[i18n])

  AOS.init();
  return (
    <>
      <div className="container">
        <Navbar />
        <Main />
        <About />
        <Xizmatlar />
        <XizmatTuri />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App;
