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
    errors.message = "email not valid ";
  }
  if (!validator.isLength(data.password, { min: 5, max: 100 })) {
    errors.message = "password must be 5 to 10 charecters ";
  }
  if (validator.isEmpty(data.name)) {
    errors.message = "name reqiuerd";
  }
  if (validator.isEmpty(data.phoneNo)) {
    errors.message = "phoneno reqiuerd";
  }
  if (validator.isEmpty(data.pincode)) {
    errors.message = "pincode reqiuerd";
  }
  if (validator.isEmpty(data.email)) {
    errors.message = "email filed reqiuerd";
  }
  if (!validator.isEmail(data.email)) {
    errors.message = "email is invalid";
  }
  if (validator.isEmpty(data.password)) {
    errors.message = "password reqiuerd";
  }
  if (validator.isEmpty(data.confimPassword)) {
    errors.message = "confimpassword filed reqiuerd";
  }
  if (!validator.equals(data.password, data.confimPassword)) {
    errors.message = "password not match ";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
