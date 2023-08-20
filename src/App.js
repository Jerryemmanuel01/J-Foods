import React from 'react';
import "./index.css";
import Home from "./component/Home";
import About from './component/About';
import Menu from './component/Menu';
import FoodData from './assets/FoodData';
import Reservation from './component/Reservation';

export default function App() {
    

    return(
      <>
        <Home />
        <About />
        <Menu />
        <Reservation />
      </>  
    
    );
}