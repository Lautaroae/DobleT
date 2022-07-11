import "./App.css"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="*" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/products" element={<Products />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
