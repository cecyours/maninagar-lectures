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
            const item = action.payload;

            const existing = state.cartItems.find((p) => p.id === item.id);

            if (existing) {
                existing.quantity += 1;
                existing.totalPrice += item.price;
                state.totalAmount += item.price;

            } else {
                state.cartItems.push({
                    ...item,
                    quantity: 1,
                    totalPrice: item.price,
                });

                state.totalQuantity += 1;
                state.totalAmount += item.price;
            }
        },

        removeFromCart: (state, action) => {
            const id = action.payload
            const existing = state.cartItems.find((p) => p.id === id)

            if (existing) {
                state.totalQuantity -= existing.quantity
                state.totalAmount -= existing.totalPrice
                state.cartItems = state.cartItems.filter((p) => p.id !== id)
            }
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        },

        increaseQuantity: (state, action) => {
            const id = action.payload;
            const existing = state.cartItems.find((p) => p.id === id);

            if (existing) {
                existing.quantity += 1;
                existing.totalPrice += existing.price;
                state.totalQuantity += 1;
                state.totalAmount += existing.price;
            }
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const existing = state.cartItems.find((p) => p.id === id);

            if (existing) {
                if (existing.quantity > 1) {
                    existing.quantity -= 1;
                    existing.totalPrice -= existing.price;
                    state.totalQuantity -= 1;
                    state.totalAmount -= existing.price;
                } else {
                    // Remove item if quantity becomes 0
                    state.totalQuantity -= existing.quantity;
                    state.totalAmount -= existing.totalPrice;
                    state.cartItems = state.cartItems.filter((p) => p.id !== id);
                }
            }
        },

    }
})

export const { addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions


export default cartSlice.reducer;



