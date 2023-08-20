import React, { useState } from "react";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [ischecked, setIschecked] = useState(false);
  return (
    <div className="nav--section">
      
      <div className="nav--main">
        <div className="nav">
            <span className="nav--site--name" ><a href="#Home">J-FOODS</a></span>
        </div>
        <input type="checkbox" id="check" />
        <label htmlFor="check" onClick={() => setIschecked((prev) => !prev)}>
          {ischecked ? (
            <FontAwesomeIcon icon={faXmark} className="checkbtn" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="checkbtn" />
          )}
        </label>
        <ul
          className="navbar--nav"
          onClick={() => {
            var isChecked;
            isChecked = document.getElementById("check");
            isChecked.checked = false;
            setIschecked(false);
          }}
        >
         <a href="#Home"className="navlink">Home</a>
         <a href="#About"className="navlink">About</a>
         <a href="#Menu"className="navlink">Menu</a>
         <a href="#Reservation"className="navlink">Reservation</a>
         <a href="#Contact"className="navlink">Contact</a>
        </ul>
      </div>
    </div>
  );
}
