const { genSalt, hash } = require("bcrypt")

module.exports = async (password) => {
	if (!password) return "No password found"
	try {
		const hashPassword = await hash(password, await genSalt(5))
		return hashPassword
	} catch (err) {
		console.log(`Password Hash Error: ${err}`)
		return new Error(err.message)
	}
}
