const express = require("express");
const _ = express.Router()
const registrationController = require("../../controllers/registrationController")


_.post("/registration",registrationController)


module.exports = _;