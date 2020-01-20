const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1]
    const decord = jwt.verify(token, 'SECRET_KEY');
    req.userData = decord;
    next();
  } catch (error) {
    return res.status(200).json({
      message: "Auth Filed"
    });
  }
};

