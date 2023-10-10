

export const RestaurentComponent = (props) => {
  const { d } = props;

  return <div>
    <div className="row">
      <div className="card">  <img className="RstImg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + d.cloudinaryImageId} />
      <div className="card-body">
   <h5 className="card-title">  {d.name} </h5> 
          <div className="ratingd">{d.avgRating}<span className="rating">⭐ Avg Rating</span></div> </div>
         {/* <div className="card-footer">  <span><h6>{d.cuisines.join(" ,")} </h6> </span>  */}
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
    <center>  <h6 className="freelabel">Free Delivery Available</h6></center>
    </div>) 
  }
}