import React from 'react'
import './hero.css'

const HeroPage = () => {
  return (
    <div className="hero">

        <div className="content">
                <h1>
                YOUR FEET DESERVE THE BEST
                </h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="btn">
                    <button className="shop-now-btn">SHOP NOW</button>
                    <button className="cateogry-btn ">CATEOGRY</button>
                </div>
                <div className="hero-footer">
                    <p>Also Avialable On</p>
                    <div className="amz-flp-img">
                        <img src="amazon(1).png" alt="amazon logo" />
                        <img src="flipkart(1).png" alt="flipkart logo" />
                    </div>
                </div>
        </div>

        <div className="hero-image">
            <img src="shoe_image(1).png" alt="shoe image" />
            
        </div>
        {/* this is my */}



    </div>
  )
}

export default HeroPage;