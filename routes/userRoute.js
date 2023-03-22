const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/createaccount", userController.signup);

module.exports = router;
