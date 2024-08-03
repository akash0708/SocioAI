import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";


function App() {
  return <div className="App">
    {/* import components */}
    <BrowserRouter>
     <Navbar/>
     
    <Hero></Hero>
      <About />
      <Contact/>
      <Footer />
    </BrowserRouter>
    </div>;
}

export default App;
