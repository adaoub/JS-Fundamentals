let counter = 0;

const increment = () => {
  counter += 1;
  return console.log(counter);
};

setInterval(increment, 2000);
