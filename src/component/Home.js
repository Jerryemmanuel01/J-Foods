import React from 'react'

export default function Home() {
  return(
    <div className="hero--section">
        <div className="nav">J-FOODS</div>

        <div className="hero--head">Welcome to J-Foods</div>
        <p className="hero--txt"></p>

        <div className="cta">
            <button className="cta--btn order">Place an order</button>
            <button className="cta--btn contact">Contact Us</button>
        </div>

    </div>
  )
}

