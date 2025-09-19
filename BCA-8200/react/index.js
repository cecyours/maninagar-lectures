const addToCart = (action) => {
    const item = action.payload

    console.log(item.price);


}



const products = [
    { id: 1, title: "Wireless Mouse", price: 25.99, category: "Electronics", inStock: true },
    { id: 2, title: "Bluetooth Headphones", price: 59.99, category: "Electronics", inStock: false },
    { id: 3, title: "Running Shoes", price: 79.99, category: "Footwear", inStock: true },
    { id: 4, title: "Coffee Maker", price: 45.50, category: "Home Appliances", inStock: true },
    { id: 5, title: "Gaming Keyboard", price: 89.00, category: "Electronics", inStock: true },
    { id: 6, title: "Office Chair", price: 120.00, category: "Furniture", inStock: false },
    { id: 7, title: "Smartphone Stand", price: 15.75, category: "Accessories", inStock: true },
    { id: 8, title: "Water Bottle", price: 10.00, category: "Lifestyle", inStock: true },
    { id: 9, title: "Backpack", price: 35.99, category: "Bags", inStock: true },
    { id: 10, title: "LED Desk Lamp", price: 22.40, category: "Home Decor", inStock: true }
];

addToCart({ payload: products[5] })