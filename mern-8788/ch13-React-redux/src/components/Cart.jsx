import React from 'react'

const Cart = () => {

    const cartItems = useSelector ((state) => state.cart.items);
    const dispatch = useDispatch();

    const total = cartItems.reduce (
        (sum, item) => sum + item.price * item.quantity,
        0 
    )
  return (
    <div>
        <h2>Your Shopping Cart</h2>

        { cartItems.length === 0 ? (
            <p>Your cart is empty!</p>
        ) : (
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} >
                        <p>
                            {item.name} - ${item.price} * {item.quantity}
                        </p>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                            Remove
                        </button>
                    </div>
                ))}

                <h3>Total: ${total.toFixed(2)}</h3>

                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
                <button>Checkout</button>
                
            </div>
        )}
    </div>
  )
}

export default Cart
