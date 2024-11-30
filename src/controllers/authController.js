const authService = require("../services/authService");

exports.login = (req, res) => {
  const { email, password } = req.body;
  const token = authService.authenticate(email, password);

  if (!token) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.json({ token });
};
