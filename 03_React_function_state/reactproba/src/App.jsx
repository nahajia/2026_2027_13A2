import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Sutik from './Sutik'
import Pizzak from './Pizzak'

function Etelek(){
  return (
    <div>
      <ul>
        <li>szendvics</li>
        <li>spagetti</li>
        <li>hamburger</li>
      </ul>
    </div>
  )
}

const Italok=()=>{
    return (
      <div>
        <ul>
          <li>karamellás tej</li>
          <li>baracklé</li>
          <li>kóla</li>
        </ul>
      </div>
    )
}


function App() {
  
  return (
        <div>
          <h1>Hello</h1>
          <p className='bekezdes'>Üdvözlet</p>
          <Etelek />
          <Italok />
          <Sutik />
          <Pizzak />
        </div>
  )
}

export default App
