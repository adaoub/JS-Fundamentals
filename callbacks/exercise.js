const printHello = () => {
  return console.log("Hello");
};

// setTimeout(printHello, 3000);

// setTimeout(() => {
//   console.log("Hello there");
// }, 2000);

// Exercise 2 #####

const executeAfterDelay = (delay, helloFunction) => {
  console.log(setTimeout(helloFunction, delay));
};

executeAfterDelay(2000, printHello);
