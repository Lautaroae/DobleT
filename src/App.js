import "./App.css"
import NavBar from "./components/navBar/navBar";
import { BrowserRouter as Router } from "react-router-dom"
import Sidebar from "./components/navBar/Sidebar/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>

        <Home />
      </Router>
    </>
  );
}

export default App;
