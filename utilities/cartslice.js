import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice(
    {
        name: "cart",
        initialState: {
            items: [],
        },
        reducers: {
            AddItems : (state, action) => {
                state.items.push(action.payload)
            },
            ClearCart: (state, action ) => {
                state.items.length = 0
            }
        }

    }
);

export default CartSlice.reducer;

export const { AddItems, ClearCart } = CartSlice.actions 