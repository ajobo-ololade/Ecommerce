import React from 'react'
import "./styleMe.css"
import 'animate.css';

const Section1 = () => {
  return (
    <>
    <div className="parallax">
    <div className="m-5 mx-auto p-5 ">
    <p className='display-4 drink text-white animate__animated animate__rubberBand '>Good Drink for Good Moments</p>
        <div className="drinks">
        <button className='btn btn-danger  animate__animated animate__backInDown' >Shop Now</button>
        <button className="btn btn-outline-danger text-white ms-4   animate__animated animate__backInRight ">Read More</button>
        

        </div>
    </div>
    </div>
    <div>
        <p className='text'>Good Drink for Good Moments</p>
        
    </div>
    </>
  )
}

export default Section1