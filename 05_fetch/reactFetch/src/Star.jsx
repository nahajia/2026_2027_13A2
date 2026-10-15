
import { useState,useEffect } from "react"

const Star=()=>{
    const [adatok,setAdatok]=useState([])

    const letoltes=async ()=>{
        let response=await fetch("https://raw.githubusercontent.com/WildCodeSchool/starwars-api/refs/heads/master/db.json")
        let data=await response.json()
        //alert(JSON.stringify(data))
        setAdatok(data.characters)
    }

    useEffect(()=>{
        letoltes()
    },[])

    return(
        <div>
            <p>Star Wars szereplők</p>
           
            {adatok.map((elem)=>(
                <div className="zoldKeret">
                    <p>{elem.name}</p>
                    <img style={{width:50}} src={elem.pic} alt="" />
                    <p>{elem.homeworld}</p>
                </div>
            ))}
        </div>
    )
}
export default Star

