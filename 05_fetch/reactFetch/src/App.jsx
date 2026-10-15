import { useState } from 'react'

import './App.css'
import Valuta from './Valuta'
import Star from './Star'
import Fordito from './Fordito'

function App() {


  return (
    <div>
      <h1>Fetch Api gyakorló</h1>
      <div className='haromOszlop'>
        <div className='oszlop'>
            <Valuta />
        </div>
        <div className='oszlop'>
            <Star />
        </div>
        <div className='oszlop'>
            <Fordito/>
        </div>
      </div>
    </div>
  )
}

export default App
