import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';
import './preloader.css'

const PreLoader = () => {

  useEffect(() => {
    preLoaderAnim()
  },[]);

  return (
    <div className="preloader">
    <div className="texts-container">
      <h3>Travel</h3>
      <h3>Study</h3>
      <h3>And</h3>
      <h3>IT Support</h3>
    </div>
  </div>
  )
}

export default PreLoader
