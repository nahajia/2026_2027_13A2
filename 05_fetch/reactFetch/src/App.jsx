import { useState } from 'react'

import './App.css'
import Valuta from './Valuta'

function App() {


  return (
    <div>
      <h1>Fetch Api gyakorló</h1>
      <div className='haromOszlop'>
        <div className='oszlop'>
            <Valuta />
        </div>
        <div className='oszlop'>
            közép
        </div>
        <div className='oszlop'>
            jobb
        </div>
      </div>
    </div>
  )
}

export default App
