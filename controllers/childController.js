const cp = require("child_process");

exports.childController = (req, res) => {
    cp.exec('start firefox');
    res.send('Task Done');
}