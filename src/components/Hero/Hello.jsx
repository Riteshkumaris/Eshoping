import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from'../assets/arrow.png'
import hero_img from '../assets/hero_image.png'
import './Hello.css'
const Hello = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
    <h2>NEW ARRIVAL ONLY</h2>
    <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
        </div>
        <p>Collection</p>
        <p>for everyone</p>
    </div>
    <div className="hero-latest-btn">
        <div>Latest collection</div>
        <img src={arrow_icon} alt="" />
    </div>
            </div>
          
        <div className="hero-right">
            <img src={hero_img} alt="" />
    
        </div>
        </div>
      )
}

export default Hello
