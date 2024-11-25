const express = require("express");
const router = express.Router();
const jobsController = require("../controllers/jobsController");

router.get("/", jobsController.getJobs);
router.get("/:id", jobsController.getJob);

module.exports = router;
