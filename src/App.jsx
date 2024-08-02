import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";


function App() {
  return <div className="App">
    {/* import components */}
    <Hero></Hero>
      <About />
      <Contact/>
      <Footer />
    </div>;
}

export default App;
