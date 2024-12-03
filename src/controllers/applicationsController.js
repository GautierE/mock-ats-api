const applicationsService = require("../services/applicationsService");

exports.apply = async (req, res) => {
  try {
    const file = await applicationsService.uploadFile(req, res);

    res.json({
      message: "File received",
      filename: file.filename,
      originalname: file.originalname,
      destination: file.destination,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
