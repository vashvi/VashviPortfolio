import React from 'react'
import "./Certificates.css"
import Slider from './Slider'


export default function Certificates() {
  return (
    <div className='certificates' id='Certificates'>
        <section className='heading'>
            <h1>Certificates & Achievements</h1>
        </section>
        <section className='myCertificate'>
          <Slider />
        </section>

    </div>
  )
}
