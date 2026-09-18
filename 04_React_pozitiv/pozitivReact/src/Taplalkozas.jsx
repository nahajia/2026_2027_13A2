const etelTomb=[
    {
        "nev":"tökfőzelék",
        "ido":20
    },
    {
        "nev":"saláta",
        "ido":20
    },
    {
        "nev":"borsófőzelék",
        "ido":20
    },
    {
        "nev":"rakott karfiol",
        "ido":100
    },
    {
        "nev":"főtt tojás",
        "ido":5
    },    
]

const Taplalkozas=()=>{
    return (
        <div className="keretBal">
            <p>Egyél egészséges ételeket:</p>
            <p>Például:</p>
            <ul>
                {etelTomb.map(elem=>(
                    <li>{elem.nev}</li>
                ))}
            </ul>


            <p>Rövid idő alatt elkészíthető ételek:</p>
            <ul>
                {etelTomb.map(elem=>(
                    elem.ido<10  ? 
                        <li>{elem.nev} elkészítési idő: {elem.ido}</li>     
                        :
                        null
                ))}
            </ul>

        </div>
    )
}
export default Taplalkozas

