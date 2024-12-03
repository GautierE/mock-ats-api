const multer = require("multer");
const path = require("path");

const upload = multer({
  dest: path.join(__dirname, "../../apply_files"),
  limits: { fileSize: 5 * 1024 * 1024 },
});

const uploadFile = (req, res) => {
  return new Promise((resolve, reject) => {
    upload.single("file")(req, res, (err) => {
      if (err) {
        return reject(err);
      }
      if (!req.file) {
        return reject(new Error("No file provided"));
      }
      resolve(req.file);
    });
  });
};

module.exports = {
  uploadFile,
};
