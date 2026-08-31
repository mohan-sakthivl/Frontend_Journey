const numbers = [10, 25, 30, 45, 50, 65];

const greaterThan30 = numbers.filter(num => num > 30);
console.log(greaterThan30);

const firstGreaterThan40 = numbers.find(num => num > 40);
console.log(firstGreaterThan40);

const has50 = numbers.includes(50);
console.log(has50);

const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);
    