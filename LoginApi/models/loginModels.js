const mongoose = require("mongoose");

const login_schema = new mongoose.Schema({
  name: {
    type: String
  },
  phoneNo: {
    type: String
  },
  pincode: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  confimPassword: {
    type: String
  }
});
module.exports = mongoose.model("login", login_schema);
