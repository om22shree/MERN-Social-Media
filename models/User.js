const User = function (data) {
  this.data = data;
  this.errors = [];
};

User.prototype.validate = function () {
  if (this.data.username == "") {
    this.errors.push("You must provide a username");
  }
  if (this.data.email == "") {
    this.errors.push("You must provide a e-mail");
  }
  if (this.data.password == "") {
    this.error.push("You must provide a password");
  }
};

User.prototype.register = function () {
  this.validate();
  // Step 2 : Only if there are no validation errors
  // Then save the user data in a database;
};

module.exports = User;
