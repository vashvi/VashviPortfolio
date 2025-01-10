import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

export default function Projects() {
  return (
    <div
      
      className="projects" id='project'>
      <motion.h1
      variants={fadeIn({ direction: "up", delay: 0.2 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      >My Projects</motion.h1>
      <div className="projectsList">
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="project-block">
          <h2>Pinterest Clone</h2>
          <img src='th (4).jpeg' alt='pinterest'/>
          <p>
            A visually stunning clone of Pinterest with features like image pinning, 
            user authentication, and responsive grid layouts. Built using React and Firebase.
          </p>
        </motion.div>
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="project-block">
          <h2>Quiz Web Application</h2>
          <img src='Screenshot 2025-01-08 131826.png' alt='quiz-application' />
          <p>
            An interactive quiz application that allows users to test their knowledge on 
            various topics with dynamic question rendering and score tracking. Built with MERN Stack.
          </p>
        </motion.div>
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}className="project-block">
          <h2>Weather Application</h2>
          <img src='Screenshot 2025-01-09 120036.png' alt='weather'/>
          <p>
            A real-time weather app that fetches data from an API to provide current weather 
            conditions, forecasts, and location-based weather updates. Built with React and OpenWeather API.
          </p>
        </motion.div>
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="project-block">
          <h2>E-Commerce Website</h2>
          <img src='Screenshot 2025-01-09 113856.png' alt='ecommerce'/>
          <p>
            A fully functional e-commerce platform featuring product listings, a shopping cart, 
            and secure payment gateway integration. Built using the MERN stack.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
