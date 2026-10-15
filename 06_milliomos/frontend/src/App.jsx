import { useState } from 'react'

import './App.css'
import TipusLenyilo from './tipus/TipusLenyilo'
import KerdesFelsorolas from './kerdes/KerdesFelsorolas'
import KerdesKeret from './kerdes/KerdesKeret'

function App() {


  return (
      <div>
        <h1>Legyen Ön is milliomos</h1>
        <h2>Gyakorló</h2>

        <KerdesKeret />

        <KerdesFelsorolas />

        <div className='keret'>
            <TipusLenyilo />
        </div>
        
      </div>
  )
}

export default App
