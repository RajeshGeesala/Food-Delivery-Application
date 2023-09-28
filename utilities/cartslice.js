import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice(
    {
        name : "cart" ,
        initialState : {
            items : [] ,
        } ,
       reducers :
       {
        AddItems : (state , action) => {
            state.items.push(action.payload)
        } ,
        ClearItems :  (state , action) => {
            state.items.length == 0
        }

       }
    } 
)

//exporting actions by destructuring : 

export const { AddItems ,ClearItems} = CartSlice.actions

