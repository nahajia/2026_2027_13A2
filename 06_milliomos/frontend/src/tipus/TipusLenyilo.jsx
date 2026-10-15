import { useState,useEffect } from "react"

const TipusLenyilo=({tipus_id})=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
            const response=await fetch("http://localhost:3000/tipus")
            const data=await response.json()
            //alert(JSON.stringify(data))
            setAdatok(data)
    }

    useEffect(()=>{
        letoltes()
    },[])

    return(
        <div>
            <select name="" id="" onChange={(e)=>tipus_id(e.target.value)}>
                {adatok.map((elem)=>(
                    <option value={elem.tipus_id} key={elem.tipus_id}>
                        {elem.tipus_nev}
                    </option>
                ))}
            </select>
         
        </div>
    )
}
export default TipusLenyilo