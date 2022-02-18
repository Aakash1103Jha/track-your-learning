const { compare } = require("bcrypt")

module.exports = async (inputPassword, userPassword) => {
	if (!inputPassword || !userPassword) return "Password not found"
	try {
		const isValid = compare(inputPassword, userPassword)
		if (isValid === false) return false
		return true
	} catch (err) {
		console.error(err)
		return new Error(err)
	}
}
