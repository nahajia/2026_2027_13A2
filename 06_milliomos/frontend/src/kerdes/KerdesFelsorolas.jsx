import { useState,useEffect } from "react"

const KerdesFelsorolas=()=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
            const response=await fetch("http://localhost:3000/kerdes")
            const data=await response.json()
            //alert(JSON.stringify(data))
            setAdatok(data)
    }

    useEffect(()=>{
        letoltes()
    },[])

    return(
        <div className="keret">
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
export default KerdesFelsorolas