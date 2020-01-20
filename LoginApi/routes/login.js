const router = require("express").Router();
const logincontroller = require("../controllers/logincontrollers");
const auth = require("../middleware/auth");


router.post("/signin", logincontroller.signin);

router.post("/login", logincontroller.login);

router.post("/staticPage", auth);



module.exports = router;
