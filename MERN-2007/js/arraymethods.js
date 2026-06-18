const data = document.getElementById("data");

const fruits = ["kiwi", "Apple", "kiwi", "Banana", "kiwi"];

console.log("Original Array:", fruits);

// push() → End me add karega
fruits.push("Mango");
console.log("After push:", fruits);

// pop() → Last element remove karega
fruits.pop();
console.log("After pop:", fruits);

// unshift() → Beginning me add karega
fruits.unshift("Rose");
console.log("After unshift:", fruits);

// shift() → First element remove karega
fruits.shift();
console.log("After shift:", fruits);

// splice() → Index 2 se 1 element delete karke "Orange" add karega
fruits.splice(2, 1, "Orange");
console.log("After splice:", fruits);