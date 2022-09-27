// Exercise 1

names = ["abdullah", "john", "bob"];

console.log(names.length);
console.log(names[1]);

const newNames = names.concat("Tom");

console.log(newNames);

// Exercise 2

const arrNumbers = Array.from(Array(11).keys());

total = 0;
arrNumbers.forEach((num) => (total += num));
console.log(total);
