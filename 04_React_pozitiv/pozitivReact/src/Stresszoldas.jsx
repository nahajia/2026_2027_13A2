import { useState } from "react"
const Stresszoldas=()=>{
    const [szam,setSzam]=useState(10)

    return(
        <div className="keretBal">
            <p>Stresszoldás</p>
            <button style={{margin:5}} onClick={()=>setSzam(szam-1)}>Csökkent</button>
            <button style={{margin:5}} onClick={()=>setSzam(szam+1)}>Növel</button>
            <p>Ez a te nyugi számod: {szam}</p>
        </div>
    )
}
export default Stresszoldas



