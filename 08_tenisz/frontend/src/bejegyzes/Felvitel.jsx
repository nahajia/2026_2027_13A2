import { useState } from "react"
import Lenyilo from "./Lenyilo"
import Cim from "../Cim"
import Swal from 'sweetalert2'

const Felvitel=({frissit})=>{
    const [beSzoveg,setBeSzoveg]=useState("")
    const [beDatum,setBeDatum]=useState("2026-11-19")
    const [beBecenev,setBecenev]=useState("")
    const [kivalasztott,setKivalasztott]=useState(1)
   
    const felvitel=async ()=>{
        //alert("haliho")
        const bemenet={
            "bejegyzes_szoveg":beSzoveg ,
            "bejegyzes_datum":beDatum, 
            "bejegyzes_becenev":beBecenev, 
            "bejegyzes_teniszezo_id": kivalasztott
        }
        const response=await fetch(Cim+"/bejegyzesFelvitel",{
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(bemenet)
        })
        const data=await response.json()
        if (response.ok){
            frissit(ertek=>!ertek)
            //alert("sikeres")
            Swal.fire({
                title: 'Sikeres felvitel!',
                text: 'Az adatok mentése sikerült.',
                icon: 'success',
                confirmButtonText: 'Rendben'
            })
        }
        else{
            //alert("hiba")
            Swal.fire({
                title: 'Hiba!',
                text: 'Hiba történt a felvitelben',
                icon: 'error',
                confirmButtonText: 'Rendben'
            })
        }
    }

    return (
        <div>
            <h2>Felvitel</h2>
            <input 
                onChange={(e)=>setBeSzoveg(e.target.value)}
                className="bemenet" 
                type="text" 
                placeholder="Add meg a bejegyzés szövegét"/>
            <br />
            <input 
                onChange={(e)=>setBeDatum(e.target.value)}
                type="date"
                placeholder="Dátum"
                />
            <br />
            <input 
                onChange={(e)=>setBecenev(e.target.value)}
                className="bemenet" 
                type="text" 
                placeholder="Add meg a beceneved"/>
            <br />
            <Lenyilo kivalasztott={setKivalasztott} />

            <button onClick={felvitel}>Felvitel</button>
        </div>
    )
}
export default Felvitel