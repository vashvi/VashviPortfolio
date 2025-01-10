import React from 'react'
import "./About.css"
import { motion } from 'framer-motion';
import { fadeIn } from './variants';
import { Link } from 'react-scroll';


export default function About() {
  return (
    <div className='about' id='about'>
        <motion.section 
        variants={fadeIn({ direction: "right", delay: 0.2 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className='left'>
          <img src='WhatsApp Image 2024-11-24 at 22.09.43_5db27af2.jpg' alt='vashvi'/>    
        </motion.section>
        <motion.section 
                variants={fadeIn({ direction: "left", delay: 0.2 })}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className='right'>
          <div>
            <span>I AM A DEVELOPER</span>
            <h1>Hi! My name is <span>Vashvi Srivastava</span></h1>
            <h3>I’m a third-year tech enthusiast specializing in web development, programming, and problem-solving.  I’m passionate about building scalable, user-friendly solutions. Eager to tackle new challenges, I strive to refine my skills and contribute to innovative projects.</h3>
            <button><Link to="services" spy={true} smooth={true} offset={-100} duration={500}>What I do</Link></button>
          </div>       
        </motion.section>
    </div>
  )
}
