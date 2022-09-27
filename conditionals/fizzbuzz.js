const fizzbuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
};

console.log(fizzbuzz(15));
console.log(fizzbuzz(9));
console.log(fizzbuzz(5));
console.log(fizzbuzz(7));
