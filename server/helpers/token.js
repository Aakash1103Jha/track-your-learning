const { sign } = require("jsonwebtoken")

const generateToken = async (payload) => {
	try {
		const token = sign(payload, process.env.TOKEN_SECRET, {
			expiresIn: "1h",
			noTimestamp: false,
		})
		return token
	} catch (err) {
		console.error(err)
		return new Error(err)
	}
}

module.exports = { generateToken }
