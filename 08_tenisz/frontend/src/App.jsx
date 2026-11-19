import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Felvitel from './bejegyzes/Felvitel'
import BejegyzesLista from './bejegyzes/BejegyzesLista'

function App() {
  const [frissit,setFrissit]=useState(false)

  useEffect(()=>{
        
    },[frissit])
  return (
    <div>
        <h1>Tenisz Hírek</h1>
        <div className='doboz'>
              <Felvitel frissit={setFrissit} />
        </div>
        <div className='doboz'>
              <BejegyzesLista frissit={frissit}/>
        </div>
    </div>
  )
}

export default App
