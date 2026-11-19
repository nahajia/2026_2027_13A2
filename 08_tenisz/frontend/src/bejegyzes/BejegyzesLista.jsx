

import { useState,useEffect } from "react"
import Cim from "../Cim"
import Le from "../assets/le.jpg"
import Fel from "../assets/fel.jpg"

const BejegyzesLista=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const [rendez,setRendez]=useState(0)

    const leToltes=async ()=>{
        try{
            let response;
            if (rendez===0)
                response=await fetch(Cim+"/bejegyzes")
            else 
                response=await fetch(Cim+"/bejegyzesCsokk")
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
    },[rendez])

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
                <img onClick={()=>setRendez(0)} src={Le} alt="" style={{width:30}} />
                <img onClick={()=>setRendez(1)} src={Fel} alt="" style={{width:30}} />

                {adatok.map((elem,index)=>(
                    <div className="bejegyzesDoboz" key={index} value={elem.bejegyzes_id}>
                        <div style={{float:"left",color:"blue"}}>{index+1}.</div>
                        <div style={{textAlign:"right",color:"orange",fontWeight:"bold"}}>{elem.teniszezo_nev}</div>
                        <div className="szoveg">{elem.bejegyzes_szoveg} </div>
                        <div className="datum">{elem.bejegyzes_datum.split('T')[0]}</div>
                        <div className="becenev">{elem.bejegyzes_becenev}</div>
                         
                    </div>
                ))}
           
        </div>
    )
}
export default BejegyzesLista