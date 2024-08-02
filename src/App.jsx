import "./App.css";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return <div className="App">
    {/* import components */}
      <About />
      <Contact/>
      <Footer />
    </div>;
}

export default App;
