const jobsService = require("../services/jobsService");

exports.getJobs = (req, res) => {
  const jobs = jobsService.getJobs();
  res.json(jobs);
};

exports.getJob = (req, res) => {
  const job = jobsService.getJob(req.params.id);
  if (!job) {
    return res.status(404).json({ error: "Job not found" });
  }
  res.json(job);
};
