const { Schema, model } = require("mongoose")

const Course = Schema({
	userId: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	source: {
		type: String,
		required: true,
	},
	lectures: {
		type: Number,
		required: true,
	},
	completed: {
		type: Number,
		required: true,
	},
	isCompleted: {
		type: Boolean,
		default: false,
	},
	deadline: {
		type: String,
		default: "TBD",
	},
	completedOn: {
		type: String,
		required: false,
	},
	hasCertificate: {
		type: Boolean,
		default: false,
	},
})

module.exports = model("courses", Course)
