import React from "react";
import FoodData from "../assets/FoodData";
import MenuCard from "./MenuCard";

export default function Menu(props) {
    const foodItems = FoodData.map((fooditem) => {
      return (
        <MenuCard
          MenuImg={fooditem.FoodImg}
          MenuName={fooditem.Foodname}
          MenuDisc={fooditem.Fooddiscription}
          MenuPrice={fooditem.Foodprice}
        />
      );
    });
  return (
    
    
    <div className="menu--section">
        
      <h3 className="menu--head">Our Menu</h3>

      <div className="menu--body">
        {foodItems}
      </div>
    </div>
  );
}
