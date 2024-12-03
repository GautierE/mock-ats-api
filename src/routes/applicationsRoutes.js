const express = require("express");
const router = express.Router();
const applicationsController = require("../controllers/applicationsController");

router.post("/apply", applicationsController.apply);

module.exports = router;
