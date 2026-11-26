import { useState } from "react"
import Lenyilo from "./Lenyilo"
import JatekPlatform from "./JatekPlatform"

const Jatekok=()=>{
    const [kivalasztott,setKivalasztott]=useState(1)
    return(
        <div>
            <h1>Játékok</h1>
            <div className="row">
                <div className="col-sm-4">
                    <Lenyilo kivalasztott={setKivalasztott}/>
                </div>
                <div className="col-sm-8">
                    <JatekPlatform kivalasztott={kivalasztott} />
                </div>
            </div>
        </div>
    )
}
export default Jatekok