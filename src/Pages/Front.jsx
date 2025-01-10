import React from 'react';
import Nav from "./Nav";
import "./Front.css"
import Typing from './Typing';


export default function Front() {
  const rows = new Array(14).fill(null);  // Create 10 rows dynamically

  return (
    <div id='front'>
      <Nav />
      
      {/* Hexagon Container */}
      <div className="hexagon-container">
        {rows.map((_, index) => (
          <Hex key={index} />
        ))}
      </div>

      <div className="front_image">
        <img 
          src="/WhatsApp_Image_2024-07-10_at_12.57.49_a27d269b-removebg.png" 
          alt="My-Portfolio-Image" 
        />
        <div>
          <Typing />
        </div>
      </div>
    </div>
  );
}

export function Hex() {
  return (
    <div className="row">
      <div className="hexagon"></div>
      <div className="hexagon"></div>
      <div className="hexagon"></div>
      <div className="hexagon"></div>
      <div className="hexagon"></div>
      <div className="hexagon"></div>
      <div className="hexagon"></div>

    </div>
  );
}
