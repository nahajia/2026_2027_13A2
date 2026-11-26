
import { useState,useEffect } from "react"
import Cim from "../Cim"

const JatekPlatform=({kivalasztott})=>{
    const [adatok,setAdatok]=useState([])
    const [tolt,setTolt]=useState(true)
    const [hiba,setHiba]=useState(false)

    const leToltes=async ()=>{
        try{
            let bemenet={
                "szam":kivalasztott
            }
            const response=await fetch(Cim+"/jatekPlatform",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bemenet)
                }
                )
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
    },[kivalasztott])

    if (tolt)
        return (
            <div style={{textAlign:"center"}}>Adatok betöltése folyamatban...</div>
                )
    else if (hiba)
        return (
            <div>Hiba</div>
                )       
    
    else return (
        <div>
            <div>
                {adatok.map((elem,index)=>(
                    <div key={index} >     
                        <p> {elem.jatek_nev} </p>
                        <p><img src={`${Cim}/kepek/${elem.jatek_kep}`} style={{width:100}}   alt="" /></p>
                    </div>
                ))}
           </div>
        </div>
    )
}
export default JatekPlatform







// const JatekPlatform=({kivalasztott})=>{
//     return (
//         <div>
//             <h2>Játékok platform szerint</h2>
//             <div>{kivalasztott}</div>
//         </div>
//     )
// }
// export default JatekPlatform

