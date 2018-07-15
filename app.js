const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const apiRouter = require("./routes/apiRouter");

app.use(bodyParser.json())

app.use("/api", apiRouter);
apiRouter.get("/*", (req, res, next) => {
  let err = 404;
  console.log("in errrorro");
  return next(err, req, res, next);
});

app.use(function (err, req, res, next) {
  console.log(err, "<<<<<<<<<");
  res.status(err.status).send({
    errMSG: err.message
  });
});

module.exports = app;