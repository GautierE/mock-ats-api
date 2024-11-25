const express = require("express");
const jobsRoutes = require("./routes/jobs");

const app = express();

app.use(express.json());
app.use("/jobs", jobsRoutes);

app.listen(3002);
