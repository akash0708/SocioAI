import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Prizes from "./components/Prizes.jsx";

function App() {
  return <div className="App">
    {/* import components */}
    <BrowserRouter>
     <Navbar/>
     
    <Hero></Hero>
      <div className="bg-top-green-to-white min-h-screen flex flex-col">
      <About />
      <Faq />
      <Prizes/>
      </div>
      <Contact/>
     
      <Footer />
      
    </BrowserRouter>
    </div>;
}

export default App;