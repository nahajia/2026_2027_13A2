import { useState } from "react"

const KonyvJobbOldal=({sorSzam,cim,iro, hossz, ar,vissza})=>{

    return (
        <div>
            <p>A könyv részletes adatai:</p>
            <p>A könyv sorszáma: {sorSzam}</p>
            <p>A könyv címe: {cim}</p>
            <p>A könyv írója: {iro}</p>
            <p>A könyv címe: {hossz}</p>
            <p>A könyv címe: {ar}</p>

            <p>Írj be egy üzenet, visszaküldöm bal oldalra:</p>
            <input type="text" onChange={(e)=>vissza(e.target.value)}   />

        </div>
    )
}
export default KonyvJobbOldal

