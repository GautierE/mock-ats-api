const express = require("express");
const jobsRoutes = require("./routes/jobs");
const authRoutes = require("./routes/auth");
const applicationsRoutes = require("./routes/applicationsRoutes");
const { authenticateToken } = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/jobs", authenticateToken, jobsRoutes);

app.use("/applications", authenticateToken, applicationsRoutes);

app.listen(3002);
