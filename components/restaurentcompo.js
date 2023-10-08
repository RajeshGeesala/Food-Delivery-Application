

export const RestaurentComponent = (props) => {
  const { d } = props;

  return <div>
    <div className=" row" >
      <div className="card"> <div className="card-header"><div className="cardtitle"> <h5 className="title"> {d.name} </h5> </div>
      </div><div className="card-body"> <img className="RstImg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + d.cloudinaryImageId} />
          <div className="ratingd">{d.avgRating}<span className="rating">⭐ Avg Rating</span></div> </div>
         {/* <div className="card-footer">  <span><h6>{d.cuisines.join(" ,")} </h6> </span>  */}
         {
              < HOFOfFreeDelivery  {...props} />
         }
          {/* <button className="btn ExpBut">View Menu</button>  */}
         {/* </div> */}
      </div>
    </div>
  </div>
};

export const HOFOfFreeDelivery = (RestaurentComponent) => {
  return (props) => {
    return (<div className="freelabel-div"> 
      <RestaurentComponent {...props} />
    <center>  <h6 className="freelabel" >Free Delivery Available</h6></center>
    </div>) 
  }
}