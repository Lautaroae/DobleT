import React, { useState, useEffect } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/navBar";
import About from "./pages/About";
import Contact from "./pages/Contact";



function App(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  // useEffect(() => {
  //   if (localStorage.getItem("token") !== null) {
  //     const token = localStorage.getItem("token");
  //     props.verifyToken(token);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <NavBar toggle={toggle} />
      <Routes>

        <Route path="*" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signIn" element={<SignIn />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
