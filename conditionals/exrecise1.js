const getNumberSign = (num) => {
  if (num > 0) {
    return "positive";
  } else if (num === 0) {
    return "zero";
  } else {
    return "negative";
  }
};

getNumberSign(10);
