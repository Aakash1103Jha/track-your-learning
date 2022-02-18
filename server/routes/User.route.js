const router = require("express").Router()
const { onLogin, onRegister, onResetPassword } = require("../controllers/User.controller")
const validateReqBody = require("../validations/validateReqBody")
const validateUserData = require("../validations/validateUserData")

router.post("/login", validateReqBody, onLogin)
router.post("/register", validateReqBody, validateUserData, onRegister)
router.post("/reset-password", validateReqBody, onResetPassword)

module.exports = router
