const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

router.get("/", userController.home);

router.get("/about", function (req, res) {
  res.send("Welcome to the about page");
});

router.post("/register", userController.register);

module.exports = router;
