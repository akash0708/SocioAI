import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Prizes from "./components/Prizes.jsx";
import Timeline from "./components/Timeline";
import Speakers from "./components/Speaker.jsx";
import Judges from "./components/Judges.jsx"

function App() {
  return (
    <div className="App">
      {/* import components */}
      <BrowserRouter>
        <Navbar />

        <Hero></Hero>

        <About />
        <Timeline />
        <Speakers />
        <Judges />
        <Faq />
        <Prizes/>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
