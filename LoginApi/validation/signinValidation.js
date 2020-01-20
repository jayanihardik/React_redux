const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validationsignin(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.phoneNo = !isEmpty(data.phoneNo) ? data.phoneNo : "";
  data.pincode = !isEmpty(data.pincode) ? data.pincode : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confimPassword = !isEmpty(data.confimPassword)
    ? data.confimPassword
    : "";

  if (!validator.isLength(data.email, { min: 6, max: 40 })) {
    errors.email = "Email Not valid ";
  }
  if (!validator.isLength(data.password, { min: 5, max: 100 })) {
    errors.password = "password must be 5 to 10 charecters ";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "name Reqiuerd";
  }
  if (validator.isEmpty(data.phoneNo)) {
    errors.phoneNo = "phoneNo Reqiuerd";
  }
  if (validator.isEmpty(data.pincode)) {
    errors.pincode = "pincode Reqiuerd";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "email Filed Reqiuerd";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password Reqiuerd";
  }
  if (validator.isEmpty(data.confimPassword)) {
    errors.confimPassword = "confimPassword Filed Reqiuerd";
  }
  if (!validator.equals(data.password, data.confimPassword)) {
    errors.confimPassword = "PassWord Not Match ";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
