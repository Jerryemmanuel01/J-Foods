import React from "react";

export default function MenuCard(props) {
    
  return (
    <div className="menu--card">
      <div className="menu--img--div">
        <img src={props.MenuImg} alt="foods" className="menu--foodImg" />
      </div>

      <div className="menu--txt">
        <div className="food--disc">
          <div className="food--name">{props.MenuName}</div>
          <p className="food--txt">{props.MenuDisc}</p>
        </div>

        <div className="food--price">${props.MenuPrice}</div>
      </div>
    </div>
  );

}