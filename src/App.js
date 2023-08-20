import React from "react";
import "./index.css";
import Home from "./component/Home";
import About from "./component/About";
import Menu from "./component/Menu";
import Reservation from "./component/Reservation";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      
      <About />
      
      <Menu />
      <Reservation />
      <Footer />
    </>
  );
}
