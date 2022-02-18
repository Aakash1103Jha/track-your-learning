const User = require("../models/User")
const generateHashPassword = require("../helpers/generateHashPassword")
const isValidPassword = require("../helpers/isValidPassword")
const { generateToken } = require("../helpers/token")

const onRegister = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ email: email })
		if (user) return res.status(400).json("Email already in use")
		const hashPassword = await generateHashPassword(password)
		if (hashPassword instanceof Error)
			return res.status(500).json("Something went wrong. Please try again")
		const newUser = new User({
			email,
			password: hashPassword,
		})
		const savedUser = await newUser.save()
		res.status(200).json(savedUser)
	} catch (err) {
		return res.status(500).json("Something went wrong while trying to register.")
	}
}
const onLogin = async (req, res) => {
	const { email, password } = req.body
	try {
		const user = await User.findOne({ email: email })
		if (!user) return res.status(400).json("User not found")
		const isValid = await isValidPassword(password, user.password)
		if (isValid instanceof Error)
			return res.status(500).json("Something went wrong. Please try again")
		if (isValid === false) return res.status(401).json("Incorrect password")
		const token = await generateToken({ id: user._id })
		if (token instanceof Error)
			return res.status(500).json("Something went wrong. Please try again")
		res.status(200)
			.cookie("TOKEN", token, {
				httpOnly: true,
				signed: true,
				expires: new Date(Date.now() + 3600000),
			})
			.json("Logged in")
	} catch (err) {
		return res.status(500).json("Something went wrong while trying to register.")
	}
}
const onResetPassword = async (req, res) => {}

module.exports = { onLogin, onRegister, onResetPassword }
