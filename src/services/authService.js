const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const dataPath = path.join(__dirname, "../../data/users.json");
const secretKey = process.env.AUTH_SECRET_KEY;

if (!secretKey) {
  throw new Error("AUTH_SECRET_KEY is not set in environment variables");
}

function readUsers() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

exports.authenticate = (email, password) => {
  const users = readUsers();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) return null;

  const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: "1w",
  });

  return token;
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};
