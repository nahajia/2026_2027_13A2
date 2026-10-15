import { useState,useEffect } from "react"

const Fordito=()=>{
    const [adatok,setAdatok]=useState("")
    const [bemenet,setBemenet]=useState("")

    const letoltes=async ()=>{
        let response=await fetch(`https://api.mymemory.translated.net/get?q=${bemenet}&langpair=en|hu`)
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data.responseData.translatedText)
    }

    useEffect(()=>{
        
    },[])

    return(
        <div>
            <p>Fordítás</p>
            <p>Írd be a lefordítandó szöveget:</p>
            <input type="text" onChange={(e)=>setBemenet(e.target.value)} />
            <p>A leforditandó szöveg: {bemenet}</p>
            <button onClick={letoltes}>Fordítás</button>
            <p>A fordítás: {adatok}</p>
        </div>
    )
}
export default Fordito



