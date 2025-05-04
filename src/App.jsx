import { useState } from 'react'
import wipImage from './assets/WIP.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h2 className='silly'>work in progress...</h2>
      <div>
        <a href="https://www.linkedin.com/in/alicebrenengen/" target="_blank">
          <img src={wipImage} className="logo" alt="Alice working at computer sketch" />
        </a>
      </div>
      <h3 className='silly'>come back soon! </h3>
    </>
  )
}

export default App
