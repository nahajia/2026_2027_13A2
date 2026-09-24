import { useState } from "react"
const halaTomb=["egészség","család","barátok","van munkám","anyagi biztonság","tiszta környezet"]

const Hala=()=>{
    const [szoveg,setSzoveg]=useState("")
    const [szoveg2,setSzoveg2]=useState("")
    const [szam,setSzam]=useState(0)

    function valtoztat(e){
        setSzoveg(e.target.value)
    }
    return (
        <div className="keretBal">
            <p>Hála</p>
            <p>Írd be miért vagy hálás:</p>
            <input type="text" onChange={valtoztat} />
            <p>Amiért hálás vagy: {szoveg}</p>

            <p>Írd be miért vagy MÉG hálás:</p>
            <input type="text" onChange={(e)=>setSzoveg2(e.target.value)} />
            <p>Amiért MÉG hálás vagy: {szoveg2}</p>

            <p>Írj be egy számot:</p>
            <input type="text" onChange={(e)=>setSzam(e.target.value)}/>
            {szam<halaTomb.length  ?
                    <p>Ezért is hálás lehetsz: {halaTomb[szam]}</p>
                    : 
                    <p>Nem jó érték lett megadva</p>                    
                    }
           
        </div>
    )
}
export default Hala

