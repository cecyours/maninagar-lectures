// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, clearCart } from "../store/cartSlice";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const total = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4 fw-bold">
//         <i className="bi bi-cart3 me-2 text-primary"></i>Your Shopping Cart
//       </h2>

//       {cartItems.length === 0 ? (
//         <div className="text-center p-5 bg-light rounded shadow-sm">
//           <i className="bi bi-bag-x fs-1 text-danger"></i>
//           <h4 className="mt-3 text-muted">Your cart is empty!</h4>
//         </div>
//       ) : (
//         <div className="card shadow-sm border-0 p-4">
//           {cartItems.map((item) => (
//             <div
//               key={item.id}
//               className="d-flex justify-content-between align-items-center border-bottom py-3"
//             >
//               <div className="text-start">
//                 <h5 className="mb-1">{item.name}</h5>
//                 <p className="mb-1 text-secondary">
//                   ${item.price} × {item.quantity}
//                 </p>
//               </div>
//               <button
//                 className="btn btn-outline-danger btn-sm"
//                 onClick={() => dispatch(removeFromCart(item.id))}
//               >
//                 <i className="bi bi-trash"></i> Remove
//               </button>
//             </div>
//           ))}

//           <div className="d-flex justify-content-between align-items-center mt-4">
//             <h4 className="fw-bold text-success">Total: ${total.toFixed(2)}</h4>
//             <div>
//               <button
//                 className="btn btn-outline-danger me-3"
//                 onClick={() => dispatch(clearCart())}
//               >
//                 <i className="bi bi-x-circle"></i> Clear Cart
//               </button>
//               <button className="btn btn-success">
//                 <i className="bi bi-bag-check"></i> Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} - ${item.price} × {item.quantity}
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
  );
};

export default Cart;
