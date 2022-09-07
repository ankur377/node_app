const upload = require('../middleware/fileMiddleware');


exports.fileController = upload, (req, res) => {
    res.send("file upload");
}