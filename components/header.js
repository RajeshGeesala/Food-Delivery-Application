import { useState } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserDetails } from "../utilities/userContext";
import { useSelector } from "react-redux";

export const HeaderComponent = () => {
     //USE STATE FOR LOGIN/LOGUOT BUTTON
     let [Btnmae, CngBtname] = useState("LOGOUT");

     const LoggedUser = useContext(UserDetails);

     // subsribe here to show cart items length ;
         const cartitems = useSelector((store)=> store?.cart?.items ) ; 
      console.log(cartitems) ;

     return (
          <div className="navbar navbar-expand-md">
               <div className="navbar-brand"> <img src="https://static.vecteezy.com/system/resources/previews/007/500/121/non_2x/food-delivery-icon-clip-art-logo-simple-illustration-free-vector.jpg"
                    className="logoimg" ></img> <h3 className="name">Food Box</h3></div>

              
               <h5> {LoggedUser.name}</h5>
               <button className="navbar-toggler"
                    data-bs-toggle="collapse" data-bs-target="#naaav" >   <span className="navbar-toggler-icon"></span></button>
               <div className="collapse navbar-collapse" id="naaav">
                    <ul className="navbar-nav ms-auto me-5" >
                         <li className="nav-item"> <a> <Link className="nav-link " to="/"> Home </Link> </a></li>
                         <li className="nav-item"> <a><Link className="nav-link " to="/about"> About Us </Link> </a></li>
                         <li className="nav-item"> <Link className="nav-link " to="/topoffers"> TopOffers </Link></li>
                         <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown"> Categories</a>
                              <ul className="dropdown-menu"><li className="dropdown-list"><a className="dropdown-item">Veg</a></li>
                                   <li className="dropdown-list"><a className="dropdown-item">Non-Veg</a></li></ul></li>
                         <li className="nav-item"> < Link to="/cart" className="nav-link">  Cart [ {cartitems.length} ]</Link></li>
                    </ul>
                    <button className="btn btn-primary" onClick={() => {
                    Btnmae === "LOGIN" ? CngBtname("LOGOUT") : CngBtname("LOGIN")
               }}  > {Btnmae} </button>
               {/* login button */}
               </div>
          </div>)

}