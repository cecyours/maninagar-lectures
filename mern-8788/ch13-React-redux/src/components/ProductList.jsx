// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/cartSlice";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// const products = [
//   {
//     id: 1,
//     name: "iPhone 15",
//     price: 999,
//     image:
//       "iPhone15.jpeg",
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S24",
//     price: 899,
//     image:
//       "galaxy-s24.jpg",
//   },
//   {
//     id: 3,
//     name: "Google Pixel 9",
//     price: 799,
//     image:
//       "GooglePixel9.jpeg", 
//   },
// ];

// const ProductList = () => {
//   const dispatch = useDispatch();

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4 fw-bold">
//         <i className="bi bi-shop-window text-success me-2"></i>Product List
//       </h2>

//       <div className="row gy-4">
//         {products.map((product) => (
//           <div className="col-md-4" key={product.id}>
//             <div className="card h-100 shadow-sm border-0">
//               <img
//                 src={product.image}
//                 className="card-img-top"
//                 alt={product.name}
//                 style={{
//                   height: "250px",
//                   objectFit: "cover",
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//               />
//               <div className="card-body text-center">
//                 <h5 className="card-title fw-bold">{product.name}</h5>
//                 <p className="card-text text-muted fs-5">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => dispatch(addToCart(product))}
//                   className="btn btn-primary rounded-pill px-4"
//                 >
//                   <i className="bi bi-cart-plus me-2"></i>Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;


import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const products = [
  {
    id: 1,
    name: "iPhone 15",
    price: 999,
    image: "iPhone15.jpeg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899,
    image: "galaxy-s24.jpg",
  },
  {
    id: 3,
    name: "Google Pixel 9",
    price: 799,
    image: "GooglePixel9.jpeg",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ${product.price}
          </p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
