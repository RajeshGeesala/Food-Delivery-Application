import { useEffect, useState } from "react";
import { Menuitems } from "./menuitems";

export const RestoCat = (props) => {
     const [ShowItems ,SetShowItems] = useState(false) ;
     
    const { data } = props
    return (
        <div className="container">    
            <h4  className="category"
                onClick={ ()=>{
                    // SetShowItems(true) ;
                    SetShowItems(!ShowItems)
                } }
            >
                {data.title} -
                <span > ({data.itemCards.length}) </span>
                <span >   </span>
            </h4>
            <h4 className="menuname">  { ShowItems &&<Menuitems  items={data.itemCards} /> } </h4>
        </div>
    )
}