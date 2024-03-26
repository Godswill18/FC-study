import React from 'react'
import Heading from '../heading/Heading'
import './body.css'
import Registeration from './Registeration'
export default function Body() {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='REGISTER WITH US' title='Best Online Travel And IT Support Expertise' />
            <p>Transforming Futures, One Step at a Time</p>
          
          </div>
        </div>
      </section>
      <div className='margin'></div>
      <Registeration/>
    </>
    
    
  )
}
