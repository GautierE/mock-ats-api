const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../../data/jobs.json");

function readData() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

exports.getJobs = () => {
  return readData();
};