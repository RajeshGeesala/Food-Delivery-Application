import { useDispatch, useSelector } from "react-redux";
import { Menuitems } from "./menuitems";
import { Link } from "react-router-dom";
import { ClearCart } from "../utilities/cartslice";
const CartComponent = () => {
                // dispatch (action)for clearing cart items
    const clearcartdispatch = useDispatch();
    const HAndelClearCart = () =>  { clearcartdispatch(ClearCart()) }
             // using selector to display items in cart 
    const HaveItems = useSelector((store)  =>  store?.cart?.items); 
    const Cartitems = HaveItems ? HaveItems : []    
    // console.log(Cartitems);

     
    return (  
        <div>
            <Menuitems items={Cartitems}></Menuitems>
            {
                Cartitems.length == 0 ? <center className="carttext">
                    <h2>           
                        Your Cart is <b style={{ color: "red" }}>Empty! </b>
                        Please Add Items To Your Cart
                    </h2>
                    <div className="btndiv">
                        <Link to="/" ><button className="btn btn-dark .clickheretohome"> CLICK HERE TO GO HOME </button> </Link>
                    </div>
                </center> :
                    <center>
                        <button onClick= {HAndelClearCart}  className="btn btn-dark clearcart">Clear Cart</button>
                    </center>
            }
        </div>
    )
};

export default CartComponent;