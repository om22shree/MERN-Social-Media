const validator = require("validator");
const User = function (data) {
  this.data = data;
  this.errors = [];
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
  this.validate();
  // Step 2 : Only if there are no validation errors
  // Then save the user data in a database;
};

module.exports = User;
