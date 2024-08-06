import React from 'react'
import img from '../images/img-1.png'
import './Main.css'
export default function Main() {
  return (
    <div className='main'>
        <div className="box1">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES</p>
            <button className="btn-1">Shop Now</button>
            <button className="btn-2">Category</button>

            <div className="available">
                Also Available On
            </div>
        </div>
        <div className="box2"><img src={img} alt="" /></div>
    </div>
  )
}
