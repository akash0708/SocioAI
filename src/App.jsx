import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";


function App() {
  return <div className="App">
    {/* import components */}
    <BrowserRouter>
     <Navbar/>
     </BrowserRouter>
    </div>;
}

export default App;
