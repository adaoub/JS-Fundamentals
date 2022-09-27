const addToBatch = (array, number) => {
  if (array.length >= 5) {
    return array;
  }

  return array.concat(number);
};

let arr = [1, 2, 3, 4, 5];
console.log(addToBatch(arr, 500));
