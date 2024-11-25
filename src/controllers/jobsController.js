const jobsService = require("../services/jobsService");

exports.getJobs = (req, res) => {
  const jobs = jobsService.getJobs();
  res.json(jobs);
};