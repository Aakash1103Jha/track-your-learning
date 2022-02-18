require("dotenv/config")
require("regenerator-runtime")

const express = require("express")
const cors = require("cors")
const path = require("path")

const startServer = require("./helpers/startServer")
const connectToDb = require("./helpers/connectToDb")

const CourseRoute = require("./routes/Course.route")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(path.resolve(__dirname, "..", "client", "build")))

app.use("/course/", CourseRoute)

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
})

startServer(app)
connectToDb()
