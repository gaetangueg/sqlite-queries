const express = require("express")
const carsRouter = express.Router()

carsRouter.get("/test", (req, res) => {
	res.json({
		msg: "cars route test ok !!",
	})
})

module.exports = carsRouter
