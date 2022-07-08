import "./App.css"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="*" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
