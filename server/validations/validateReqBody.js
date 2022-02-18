module.exports = async (req, res, next) => {
	if (!req.body || Object.keys(req.body).length === 0)
		return res.status(400).json("Data not found")
	next()
}
