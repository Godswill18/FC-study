import React from 'react'
import PreLoader from '../../components/UI/PreLoader'
import { Link } from 'react-router-dom'
import './main.css'

export default function Main() {
  return (
  <>
  <PreLoader/>
    <div className='contain'>
        <div className='main-logoX'>
          <img src="../../../assets/logo/logo.png" alt="" />
        </div>
        <div className='content'>
              <h2>Welcome to FranChris Consult</h2>
              <p> Study Abroad 
                  At FranChris Consult we inspire life changing study experiences. We are an international 
                  education advisory company and over the years, we have
                  been known to provide professional services that are founded on ethical principles. 
              </p>
              <Link to={'/home'}>
              <button className='lm-button'>Get Started</button>
              </Link>
                      
        </div>
    </div>
    
  </>
  )
}
