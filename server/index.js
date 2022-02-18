require("dotenv/config")
require("regenerator-runtime")

const express = require("express")
const cors = require("cors")
const path = require("path")
const cookieParser = require("cookie-parser")

const startServer = require("./helpers/startServer")
const connectToDb = require("./helpers/connectToDb")

const CourseRoute = require("./routes/Course.route")
const UserRoute = require("./routes/User.route")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(express.static(path.resolve(__dirname, "..", "client", "build")))

app.use("/course/", CourseRoute)
app.use("/auth/", UserRoute)

app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
})

startServer(app)
connectToDb()
