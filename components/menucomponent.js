import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import { APIMENUData } from "../utilities/consts";
import { RestoCat } from "./restocategory";
export const MenuComponent = () => {
     const { restoid } = useParams();
     // console.log(restoid)
     const [RestoMenu, SetMenu] = useState(null);

     useEffect(() => {
          GetRestoMenu();
     }, [])
     const GetRestoMenu = async () => {
          try {
               const RestoRespone = await axios.get(APIMENUData + restoid);
               // console.log(RestoRespone.data.data.cards[0].card.card.info.name);
               //   SetLoad(false) ;
               // console.log(RestoRespone)
               SetMenu(RestoRespone.data)
          }
          catch {
               console.error("somthing error in api ")
          }
     };

     //Conditional Rendering  //here are we are storing names area names in one variable 
     const havename  = RestoMenu?.data?.cards[0]?.card?.card?.info.name;
     const HaveArea = RestoMenu?.data?.cards[0]?.card?.card?.info.areaName;
     const HaveAvailability = RestoMenu?.data?.cards[0]?.card?.card?.info.availability.nextOpenTimeMessage
     const HaveCityName = RestoMenu?.data?.cards[0]?.card?.card?.info.city ;
      const HaveCategory = RestoMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((categogoryname)=> 
      categogoryname?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ;
     //  console.log(HaveCategory )
       // we are giving condition to that variables in a 
     const Availabilty = HaveAvailability ? HaveAvailability : "At any time"
     const AreaNAme = HaveArea ? HaveArea : " ....  ";
     const Name = havename ? havename : ".... ";
     const CItyname = HaveCityName ? HaveCityName : "..." 
     const CatName = HaveCategory  ? HaveCategory : [];
     //  conditional rendering for menu items
     const HAveMenuName = RestoMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
     // console.log(HAveMenuName);
     const MenuNAmes = HAveMenuName ? HAveMenuName : [ ] 
     // this is formal way of rendering
     //  let {name} = RestoMenu?.data?.cards[0]?.card?.card?.info
     return (<div className=" container menu">
           <center className="menumain">  <h2> {Name}</h2>
          <h4> City :{CItyname}</h4>
          <h5>Area : {AreaNAme}</h5>
           
          <h5> Availabilty : {Availabilty} </h5> </center>
           {/* <ul className="list-group">
               {
                    MenuNAmes.map((item) => <li className="list-group-item">{item?.card?.info?.name} - {item?.card?.info?.price} </li>)
               }
          </ul>  */}
            { 
            CatName.map( (cat) =>   (   <RestoCat data = {cat.card.card}/>)) }

     </div>)
}