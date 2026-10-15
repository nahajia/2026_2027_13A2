import { useState,useEffect } from "react"

const Valuta=()=>{
    const [adatok,setAdatok]=useState("")

    const letoltes=async ()=>{
        let response=await fetch("https://api.exchangerate-api.com/v4/latest/EUR")
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data.rates["HUF"])
    }

    useEffect(()=>{
        letoltes()
    },[])

    return(
        <div>
            <p>Euró árfolyama:</p>
            <p>{adatok} Ft</p>
        </div>
    )
}
export default Valuta
