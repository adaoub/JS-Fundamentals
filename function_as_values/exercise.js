const lowercaseMessage = (message) => {
  return message.toLowerCase();
};

const transform = (message, transfomFunction) => {
  return transfomFunction(message);
};

console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));
