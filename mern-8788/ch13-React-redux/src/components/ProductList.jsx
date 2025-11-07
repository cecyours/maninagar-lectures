import React from 'react'

const ProductList = () => {

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
    ]
  return (
    <div>
        <h2>Product List</h2>

        {products.map((product) => (
            <div key={product.id}>
                <p>
                    {product.name} - ${product.price}
                </p>

                <button onClick={() => dispatch(addToCart(product))}></button>
            </div>
        ))}
        
    </div>
  )
}

export default ProductList
