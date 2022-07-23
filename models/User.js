const validator = require("validator");
const User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.cleanUp = function () {
  if (typeof this.data.username != "string") {
    this.data.username = "";
  }
  if (typeof this.data.email != "string") {
    this.data.username = "";
  }
  if (typeof this.data.password != "string") {
    this.data.username = "";
  }

  // Get rid of useless properties.
  this.data = {
    username: this.data.username.trim().toLowerCase(),
    email: this.data.email.trim().toLowerCase(),
    password: this.data.password,
  };
};

User.prototype.validate = function () {
  if (this.data.username == "") {
    this.errors.push("Invalid Username");
  }
  if (
    this.data.username != "" &&
    !validator.isAlphanumeric(this.data.username)
  ) {
    this.errors.push("Username can only contain letters and numbers");
  }
  if (!validator.isEmail(this.data.email)) {
    this.errors.push("Invalid E-mail");
  }
  if (this.data.password == "") {
    this.errors.push("Invalid password");
  }
};

User.prototype.register = function () {
  this.cleanUp();
  this.validate();
};

module.exports = User;
