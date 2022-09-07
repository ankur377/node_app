const cp = require("child_process");
const file = require('../helper/test');

exports.childController = (req, res) => {
    cp.exec('start firefox');
    cp.execSync('node file');
    res.send('Task Done');
}