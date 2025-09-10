import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalAmount: 0,
        totalQuantity: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload


            const existing = state.cartItems.find((p) => p.id === item.id)


            if (existing) {
                existing.quantity += 1;
                existing.totalPrice += item.price;
            } else {
                state.cartItems.push({
                    ...item,
                    quantity: 1,
                    totalPrice: item.price,
                });

                state.totalQuantity++;
                state.totalAmount += item.price;
            }


        }
    }
})

export const { addToCart } = cartSlice.actions


export default cartSlice.reducer;



