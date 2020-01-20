var express = require('express');
var logger = require('morgan');
const bodyParser = require("body-parser");
var app = express();
const morgan = require("morgan");


require("./config/mongo");
app.use(bodyParser.json()).use(morgan());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,DELETE,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/login"));

app.use((req, res, next) => {
  req.status = 404;
  const error = new Error("Route Not Found");
  next(error);
});

app.use((error, req, res, next) => {
  res.status(req.status || 500).send({
    message: error.message,
    stack: error.stack
  });
});

app.listen(5000, function () {
  console.log("server is run");
});

