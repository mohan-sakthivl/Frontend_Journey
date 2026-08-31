
function add(...numbers) {
    return numbers;
}

console.log(add(10, 20, 30, 40));




const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log(newNumbers);