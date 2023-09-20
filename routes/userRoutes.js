 const express = require("express")
const { signUp, verifyOtp } = require("../controllers/userController")
const { registration } = require("../controllers/registerController")
const { authentication } = require("../middi/auth")

 const router = express.Router()


router.route("/genrateOtp").post(signUp)
router.route("/verify").post(verifyOtp)


router.route("/registration").post(authentication,registration)
 module.exports = router