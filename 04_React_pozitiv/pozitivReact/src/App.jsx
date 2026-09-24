import { useState } from 'react'
import baross from "./kepek/baross.webp"
import kep from "./kepek/kep.jpg"
import './App.css'

import Keruldel from './Keruldel'
import HasznosTanacs from './Hasznostanacs'
import Taplalkozas from './Taplalkozas'
import Hala from './Hala'
import Stresszoldas from './Stresszoldas'
import Konyv from './Konyv'

const szemely={
  "nev":"Kapros Károly",
  "iskola":"Baross"
}

const Utazas=()=>{
  return (
    <div className='keretBal'>
        <p>Utazz el például ide:</p>
        <ul>
          <li>Olaszország</li>
          <li>Franciaország</li>
          <li>Spanyolország</li>
        </ul>
    </div>
  )
}


function Nevjegy(){
  return (
    <div className='keretKozep'>
      <p>Készítette: {szemely.nev}</p>
      <p>Iskola: {szemely.iskola}</p>
      <img style={{width:100}} src={baross} alt="Baross" />
    </div>
  )
}
function App() {

  return (
          <div>
            <h1>Pozitív gondolatok</h1>
            <h2>...a boldog élethez :)</h2>
            <img id='vigyorgoKep' src={kep} alt="" />


            <Konyv />
            <Stresszoldas />
            <Hala />
            <Taplalkozas />
            <HasznosTanacs />
            <Keruldel />
            <Utazas />
            <Nevjegy />
          </div>
  )
}

export default App
