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

// slice(start, end) → Array ka ek part copy karke dega
const slicedFruits = fruits.slice(1, 4);
console.log("After slice(1,4):", slicedFruits);

// concat(...arrays) → Do ya zyada arrays ko merge karega
const moreFruits = ["Mango", "Pineapple"];
const mergedFruits = fruits.concat(moreFruits);
console.log("After concat:", mergedFruits);

// flat(depth) → Nested arrays ko flat karega
const nestedArray = ["Apple", ["Banana", "Orange"], ["Kiwi", ["Mango"]]];
console.log("Original Nested Array:", nestedArray);
console.log("After flat(1):", nestedArray.flat(1));
console.log("After flat(2):", nestedArray.flat(2));

// flatMap(callback) → Pehle map karega phir 1 level flat karega
const flatMapped = fruits.flatMap(fruit => [fruit, fruit.toUpperCase()]);
console.log("After flatMap:", flatMapped);

// toReversed() → Original array change kiye bina reversed copy dega
const reversedCopy = fruits.toReversed();
console.log("toReversed():", reversedCopy);
console.log("Original after toReversed():", fruits);

// toSorted(compareFn) → Original array change kiye bina sorted copy dega
const sortedCopy = fruits.toSorted();
console.log("toSorted():", sortedCopy);
console.log("Original after toSorted():", fruits);

// toSpliced(start, deleteCount, ...items)
// splice() ka immutable version
const splicedCopy = fruits.toSpliced(1, 2, "Grapes", "Papaya");
console.log("toSpliced():", splicedCopy);
console.log("Original after toSpliced():", fruits);

// with(index, value) → Original array change kiye bina ek value replace karega
const updatedCopy = fruits.with(2, "Strawberry");
console.log("with(2, 'Strawberry'):", updatedCopy);
console.log("Original after with():", fruits);

// forEach(callback) → Har element par loop chalayega
console.log("forEach():");
fruits.forEach((fruit, index) => {
  console.log(`Index ${index}: ${fruit}`);
});

// map(callback) → Har element ko transform karke naya array dega
const fruitLengths = fruits.map(fruit => fruit.length);
console.log("map() - fruit lengths:", fruitLengths);

// filter(callback) → Sirf matching elements return karega
const onlyKiwi = fruits.filter(fruit => fruit.toLowerCase() === "kiwi");
console.log("filter() - only kiwi:", onlyKiwi);

// reduce(callback, initialValue) → Array ko single value me reduce karega
const numbers = [10, 20, 30, 40];
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log("reduce() - total sum:", total);

// reduceRight(callback, initialValue) → Right se left reduce karega
const words = ["I", "love", "JavaScript"];
const sentenceRight = words.reduceRight((acc, word) => acc + " " + word, "");
console.log("reduceRight() - sentence:", sentenceRight.trim());