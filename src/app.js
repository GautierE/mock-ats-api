const express = require("express");
const jobsRoutes = require("./routes/jobs");
const authRoutes = require("./routes/auth");
const { authenticateToken } = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/jobs", authenticateToken, jobsRoutes);

app.listen(3002);
