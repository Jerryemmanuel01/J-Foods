import React from 'react'
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className="hero--section" id="Home">
      <div className="hero--body">
        <div className="hero--head">
          <span className="welcome">Welcome to </span>
          <h3 className="hero-name">J-Foods</h3>
        </div>
        <p className="hero--txt">
          Delicious foods are always ready in our restaurant
        </p>

        <div className="cta">
          <button className="cta--btn order">Place an order</button>
          <button className="cta--btn contact">Contact Us</button>
        </div>
      </div>
      {/* <div className="id--links" id="About"></div> */}
    </div>
  );
}

