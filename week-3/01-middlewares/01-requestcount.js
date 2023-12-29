const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();

let requestCount = 0;

function reqCountMiddleware(req, res, next) {
  requestCount++;
  console.log(requestCount);
  next();
}

app.use(reqCountMiddleware);

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get("/user", function (req, res, next) {
  res.status(200).json({ name: "john" });
  next();
});

app.post("/user", function (req, res, next) {
  res.status(200).json({ msg: "created dummy user" });
  next();
});

app.get("/requestCount", function (req, res) {
  res.status(200).json({ requestCount });
});

//Global Catch

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: "Something went wrong",
  });
}

app.listen(3000);

module.exports = app;
