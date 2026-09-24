import { useState } from "react"
import KonyvJobbOldal from "./KonyvJobbOldal"
const konyvTomb=[
    {
        "cim":"Harry Potter 1",
        "iro":"Rowling",
        "hossz":350,
        "ar":3000
    },
    {
        "cim":"Harry Potter 2",
        "iro":"Rowling",
        "hossz":350,
        "ar":3000
    },
    {
        "cim":"Hail Mary küldetés",
        "iro":"Weir",
        "hossz":500,
        "ar":3000
    },    
]


const Konyv=()=>{
    const [kivalasztott,setKivalasztott]=useState(0)
    const [uzenet,setUzenet]=useState("alma")

    return(
        <div className="keretBal">
            <p>Olvass könyveket!</p>

            <div className="ketOszlop">
                <div className="oszlop">
                    <select name="" id="" onChange={(e)=>setKivalasztott(e.target.value)}>
                        {konyvTomb.map((elem,index)=>(
                            <option value={index}>{elem.cim}</option>
                        ))}
                    </select>
                    <p>A kiválaszott sorszáma: {kivalasztott}</p>
                    <p>A jobbról visszaküldött üzenet:{uzenet}</p>
                </div>
                <div className="oszlop">
                    <KonyvJobbOldal 
                        sorSzam={kivalasztott} 
                        cim={konyvTomb[kivalasztott].cim}  
                        iro={konyvTomb[kivalasztott].iro} 
                        hossz={konyvTomb[kivalasztott].hossz}  
                        ar={konyvTomb[kivalasztott].ar} 
                        vissza={setUzenet}  
                        />
                </div>
            </div>

        </div>
    )
}
export default Konyv


