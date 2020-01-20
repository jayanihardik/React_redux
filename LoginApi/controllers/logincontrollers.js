const loginModels = require("../models/loginModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validationsignin = require("../validation/signinValidation");
const validationlogin = require("../validation/loginvalidation");

exports.signin = function (req, res) {
  const { errors, isValid } = validationsignin(req.body);
  if (!isValid) {
    return res.status(201).json(errors);
  }
  loginModels
    .find({ email: req.body.email })
    .exec()
    .then(results => {
      if (results.length >= 1) {
        return res.status(200).json({
          message: "Email is exists"
        });
      } else {
        bcrypt.hash(
          req.body.password && req.body.confimPassword,
          10,
          (err, hash) => {
            if (err) {
              return res.status(200).json({
                message: "Not found"
              });
            } else {
              var data = new loginModels({
                name: req.body.name,
                phoneNo: req.body.phoneNo,
                pincode: req.body.pincode,
                email: req.body.email,
                password: hash,
                confimPassword: hash
              });
              loginModels
                .create(data)
                .catch(err => {
                  return res.status(200).json({
                    message: "You not Enter valid data"
                  });
                })
                .then(results => {
                  return res.status(200).json({
                    ResponseStatus: 0,
                    message: "Registstion sucessfull"
                  });
                });
            }
          }
        );
      }
    });
};

exports.login = (req, res, next) => {
  const { errors, isValid } = validationlogin(req.body);
  if (!isValid) {
    return res.status(201).json({
      message: errors.email,
      ResponseStatus: 1,
    });
  }
  loginModels
    .find({ email: req.body.email })
    .exec()
    .then(results => {
      if (results.length < 1) {
        res.status(200).json({
          message: "User doesnot exist"
        });
      }
      bcrypt.compare(req.body.password, results[0].password, (err, result) => {
        if (err) {
          return res.status(200).json({
            message: "Password is wrong"
          });
        }
        if (result) {
          const token = jwt.sign(
            { id: results.id, email: results.email },
            process.env.test ? process.env.test : 'SECRET_KEY',
            {
              expiresIn: 120000
            }
          );

          return res.status(200).json({
            ResponseStatus: 0,
            message: "Login Sucefull",
            token: token
          });
        }
        res.status(200).json({
          message: "Password is wrong"
        });
      });
    })
    .catch(err => {
      res.status(200).json({
        message: "Not found"
      });
    });
};




