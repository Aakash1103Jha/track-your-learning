const { Schema, model } = require("mongoose")

const User = Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamp: true },
)

module.exports = model("users", User)
