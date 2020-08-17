// import all library/packages required for this module/file
const express = require("express");
const spaceXRouter = require("./spaceX");

// create express app
const app = express();

// specify API endpoints here
app.use("/launches/", spaceXRouter);

module.exports = app;