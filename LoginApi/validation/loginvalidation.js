const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validationlogin(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors.email = "email Filed Reqiuerd";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password Reqiuerd";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
