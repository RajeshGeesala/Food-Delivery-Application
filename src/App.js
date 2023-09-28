import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { HeaderComponent } from "../components/header";
 import  {RestaurentComponent} from  "../components/restaurentcompo" ;
import { RestaurentData } from "../utilities/RestaurebtData" ;
import { Bodycomponent } from "../components/bodycomponent";
import { createBrowserRouter ,RouterProvider , Outlet }  from "react-router-dom";
import { AboutUs } from "../components/aboutus";
import { Error } from "../components/error";
import { FooteerComponent  }  from "../components/footer";
import { AppStore } from "../utilities/AppStore";
import { TopOffers } from "../components/topoffers"; 
import { MenuComponent } from "../components/menucomponent";
import { Provider } from "react-redux";

const GlobalComponent = ( ) => {
    return <div className="container-fluid">
      <Provider store={AppStore} >
           <HeaderComponent/> 
                <Outlet/> 
           <FooteerComponent/>
           </Provider>    </div>
 } ;
 
//  const AppRouter = createBrowserRouter([
//     {
//         path : "/",
//         element : <GlobalComponent/>,
//         errorElement :  <Error/> ,
//     } ,
//     {
//         path : "about" ,
//         element : <AboutUs/> ,
      
//     }  ,
  
//  ]) 

const AppRouterWithOutlet = createBrowserRouter ([
    {
        path : "/" ,
        element : <GlobalComponent/>,
         children : [
            {
                path : "/" ,
                element : <Bodycomponent/>
             } ,
              {
            path : "/about" ,
            element : <AboutUs/>
             } ,
       
          {
            path : "/topoffers" ,
            element : <TopOffers/>
         } ,
          
            {
               path : "/menu/:restoid" , 
               element : <MenuComponent/>
            }
         
         ] ,
         errorElement : <Error/> ,

        } 
])

const root = ReactDOM.createRoot(document.getElementById('root')) ;
 //root.render(<GlobalComponent/>) 
 root.render(  <RouterProvider router={AppRouterWithOutlet} />)