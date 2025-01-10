import React from 'react'
import "./Typinng.css"
import { Link } from 'react-scroll';


export default function Typing() {
  return (
    <div>
      <div className='subtitle'>
        <h1>Hi, I am <span>Vashvi Srivastava.</span></h1>
        <h3>Frontend Developer</h3>
        <button><Link to="about" spy={true} smooth={true} offset={-100} duration={500}>Find Out More</Link></button>
      </div>
    </div>
  )
}
