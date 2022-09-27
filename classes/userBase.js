const User = require("./user.js");

class userBase {
  constructor(users) {
    this.users = users;
  }
  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((user) => user.getName());
  }

  getIntroductions() {
    return this.users.map((intro) => intro.getIntroduction());
  }
}

module.exports = userBase;
