import About from "./components/About/About";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import XizmatTuri from "./components/XizmatTuri/XizmatTuri";
import Xizmatlar from './components/Xizmatlar/Xizmatlar';
import Faq from './components/Faq/Faq';
import Footer from "./components/Footer/Footer";
import AOS from "aos"
function App() {
  AOS.init()
  return (
    <div className="container">
      <Navbar />
       <Main />
      <About />
      <Xizmatlar />
      <XizmatTuri />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
