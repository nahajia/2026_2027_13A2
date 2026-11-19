

import { useState,useEffect } from "react"
import Cim from "../Cim"

const BejegyzesLista=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const leToltes=async ()=>{
        try{
            const response=await fetch(Cim+"/bejegyzes")
            const data=await response.json()
            //alert(JSON.stringify(data))
            //console.log(data)
            if (response.ok)
                {
                    setAdatok(data)
                    setTolt(false)}
            else 
                {
                    setHiba(true)
                    setTolt(false)
                }
            }
        catch (error){
            console.log(error)
            setHiba(true)
        }
        
    }

    useEffect(()=>{
        leToltes()
    },[])

    if (tolt)
        return (
            <div style={{textAlign:"center"}}>Adatok betöltése folyamatban...</div>
                )
    else if (hiba)
        return (
            <div>Hiba</div>
                )       
    
    else return (
        <div >

                {adatok.map((elem,index)=>(
                    <div className="bejegyzesDoboz" key={index} value={elem.bejegyzes_id}>
                        <div className="szoveg">{elem.bejegyzes_szoveg} </div>
                        <div className="datum">{elem.bejegyzes_datum}</div>
                        <div className="becenev">{elem.bejegyzes_becenev}</div>
                         
                    </div>
                ))}
           
        </div>
    )
}
export default BejegyzesLista