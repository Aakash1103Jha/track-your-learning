const { connect } = require("mongoose")

const mongooseOptions = { logger: console.info, loggerLevel: "info" }

module.exports = () => {
	try {
		connect(process.env.URI, mongooseOptions, () => console.info("MongoDB Atlas connected!!"))
	} catch (err) {
		console.error(`MongoDB Error: ${err}`)
	}
}
