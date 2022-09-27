const fizzbuzzuntil = (num) => {
  for (num; num > 0; num--) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    } else if (num % 3 === 0) {
      console.log("Fizz");
    } else if (num % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
};

fizzbuzzuntil(10);

module.exports = fizzbuzzuntil;
