import { useState } from "react"
import TipusLenyilo from "../tipus/TipusLenyilo"
import KerdesTipus from "./KerdesTipus"
const KerdesKeret=()=>{
    const [szam,setSzam]=useState(1)
    return (
        <div className="keret">
            <p>Kérdések tipusok szerint:</p>
            <div>
                <TipusLenyilo tipus_id={setSzam} />
            </div>
            <div>
                
                <KerdesTipus szam={szam} />
            </div>
        </div>
    )
}
export default KerdesKeret

