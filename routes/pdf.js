var pdf = require("pdf-creator-node");
const { options } = require('./options');
const fs = require('fs');
var html = fs.readFileSync("../public/index.html", "utf8");
const  users  = require('./users');

var document = {
  html: html,
  data: {
    users: users,
  },
  path: "./output.pdf",
  type: "",
};
pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });