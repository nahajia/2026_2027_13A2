import TipusLenyilo from "../tipus/TipusLenyilo"
import KerdesTipus from "./KerdesTipus"
const KerdesKeret=()=>{
    return (
        <div className="keret">
            <p>Kérdések tipusok szerint:</p>
            <div>
                <TipusLenyilo />
            </div>
            <div>
                <KerdesTipus />
            </div>
        </div>
    )
}
export default KerdesKeret

