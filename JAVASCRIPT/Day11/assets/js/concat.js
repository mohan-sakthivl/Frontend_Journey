const fruits = ["Apple", "Mango", "Orange"];
const vegetables = ["Carrot", "Potato"];

fruits.push("Banana")
console.log(fruits);

fruits.pop()
console.log(fruits);

fruits.unshift("Grapes")
console.log(fruits);

fruits.shift()
console.log(fruits);

console.log(fruits.length);


const output = fruits.concat(vegetables)
console.log(output);
