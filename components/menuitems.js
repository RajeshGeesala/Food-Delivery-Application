import { useDispatch } from "react-redux"
import { AddItems } from "../utilities/cartslice";

export const Menuitems = ({ items }) =>   
 


{

   const dispatchforitems = useDispatch() ;
   const HandelAddItem = (item ) => {
      dispatchforitems((AddItems(item)))
   } ;
    

   return (<div className="container menu-items">
      <ul className="list-group">
        
       {items.map((item) =>
            <li  className="list-group-item menu-items"> 
             <span>  {item.card.info.name}  </span>
               <center className="ms-5" > Price  : { item.card.info.price / 100 }  </center>
               <div className="ms-auto">
                   <img className="menu-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId}
                     alt=""  height={80}  />  
                     <button className="btn AddToCartButton ms-5"  onClick={() => {
                          HandelAddItem( item )
                     }}> +Add </button></div>
            </li>)}
      </ul>
   </div>)
}