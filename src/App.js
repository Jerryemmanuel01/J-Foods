import React from 'react';
import "./index.css";
import Home from "./component/Home";
import About from './component/About';
import Menu from './component/Menu';
import FoodData from './assets/FoodData';

export default function App() {
    

    return(
      <>
        <Home />
        <About />
        <Menu />
      </>  
    
    );
}