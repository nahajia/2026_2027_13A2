import { useState,useEffect } from "react"

const KerdesTipus=({szam})=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
            let bemenet={
                "szam":szam
            }
            const response=await fetch("http://localhost:3000/kerdesTipus",
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
            setAdatok(data)
    }

    useEffect(()=>{
        letoltes()
    },[szam])
    return (
        <div>
            <p>Felsorolás</p>
            {szam}
             <ul name="" id="">
                {adatok.map((elem)=>(
                    <li key={elem.kerdes_id}>
                        {elem.kerdes_szoveg}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default KerdesTipus