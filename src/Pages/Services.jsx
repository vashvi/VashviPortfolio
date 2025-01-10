import React from 'react';
import "./Services.css";
import { motion } from 'framer-motion';
import { fadeIn } from './variants';

export default function Services() {
  return (
    <section className='services'>
      <motion.h1
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        What I DO
      </motion.h1>
      <div className='list'>
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='block'>
          <img src='th.jpeg' alt='web-dev' />
          <h1>Web Development</h1>
          <h3>
            Crafting responsive, user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React.
          </h3>
        </motion.div>
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='block'>
          <img src='th (1).jpeg' alt='full-stack' />
          <h1>Full-Stack Development</h1>
          <h3>
            Building full-stack applications using the MERN stack, integrating front-end and back-end for efficient and dynamic solutions.
          </h3>
        </motion.div>
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='block'>
          <img src='th (2).jpeg' alt='ui/ux' />
          <h1>UI/UX Design</h1>
          <h3>
            Designing intuitive and visually appealing interfaces with a focus on user-centered experiences.
          </h3>
        </motion.div>
        <motion.div 
        variants={fadeIn({ direction: "up", delay: 0.2 })}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}className='block'>
          <img src='th (3).jpeg' alt='problem-solving' />
          <h1>Problem Solving</h1>
          <h3>
            Offering solutions to complex technical challenges by leveraging strong analytical and programming skills.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}
