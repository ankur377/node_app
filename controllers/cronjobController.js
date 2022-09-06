const express = require("express");
const cron = require("node-cron");

exports.cronjobController =  (req, res) => {
    cron.schedule("*/60 * * * * *", function () {
        console.log("running a task every 60 second");
    });
    res.send("cron job working");

}