export const Menuitems = ({ items }) => {
 
   return (<div className="container">
      <ul className="list-group">
         {/* normal type of renderimg  */}
         {/* <li className="list-group-item">
        {   items.map((itemnames )=> ( itemnames.card.info.name)) } </li> */}

         {items.map((item) =>
            <li className="list-group-item">  <span> {item.card.info.name}     </span>
             <center className="ms-5" > Price  : {item.card.info.price /100} </center>
               {/* <p>Description{item.card.info.description }</p> */}
               <div className="ms-auto">
               <img className="menu-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + item.card.info.imageId}
                  alt="" height={80} /> <button className="btn AddToCartButton ms-5" >+Add</button> </div>
            </li>)}
      </ul>
   </div>)
}