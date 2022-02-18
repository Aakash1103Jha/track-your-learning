const router = require("express").Router()
const { onLogin, onRegister, onResetPassword } = require("../controllers/User.controller")

router.post("/login", onLogin)
router.post("/register", onRegister)
router.post("/reset-password", onResetPassword)

module.exports = router
