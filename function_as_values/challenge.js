const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
};

const notifyByText = (num) => {
  return `Text sent to: ${num}`;
};

const notify = (input, notifyFunction) => {
  return notifyFunction(input);
};

console.log(notify(+10000000, notifyByText));
console.log(notify("hello@makers.tech.test", notifyByEmail));
