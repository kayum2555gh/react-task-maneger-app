import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assests/images.png'
import './Landing.css'

const Landing = () => {
  return (
    <div className='hero'>
        <div className="intro-text">
            <h1>
              <span className='tagline1'>Organize work and life</span> <br />
              <span className='tagline2'>finally.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid commodi nostrum eligendi! Dolorem impedit laborum, sit illo molestiae saepe! Consequatur?
            </p>
            <Link className="btn red" to="/register">Register Now!</Link>
            <Link className="btn blue" to="/login">Login</Link>
        </div>
        <div className="">
          <img src={image} alt="heroimage"  width={250} height={250}/>
        </div>
    </div>
  )
}

export default Landing