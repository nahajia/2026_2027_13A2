import { useState } from "react"


const Sutik=()=>{
    const [szoveg,setSzoveg]=useState("somlói")


    return (
        <div>
            <h2>Sütik</h2>
            <p>dobos torta</p>
            <p>francia krémes</p>
            <p>nosztalgia krémes</p>
            <p>{szoveg}</p>
        </div>
    )
}

export default Sutik