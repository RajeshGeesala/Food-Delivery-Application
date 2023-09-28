import { configureStore } from "@reduxjs/toolkit";

export const AppStore = configureStore(
    {  
        //mention all slices in reducers
        reducer : {

        }
    }
) 

//connect this App Store.js  to App.js 

