module.exports = async (req, res, next) => {
	const { email, password } = req.body

	if (!email) return res.status(400).json("Email empty")
	const validEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	if (!validEmail) return res.status(400).json("Invalid email address")

	if (!password) return res.status(400).json("Password empty")
	const validPassword = password.match(
		/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*["!'^+%&/()=?_\-*\\{}[\]$#£é€@])(?=.{8,}))/gm,
	)
	if (!validPassword)
		return res
			.status(400)
			.json(
				"Password should be at least 8 characters long, with at least one of each - uppercase letter, special character and number",
			)
	next()
}
