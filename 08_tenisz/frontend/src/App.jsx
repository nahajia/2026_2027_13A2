import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Felvitel from './bejegyzes/Felvitel'
import BejegyzesLista from './bejegyzes/BejegyzesLista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>Tenisz Hírek</h1>
        <div className='doboz'>
              <Felvitel />
        </div>
        <div className='doboz'>
              <BejegyzesLista />
        </div>
    </div>
  )
}

export default App
