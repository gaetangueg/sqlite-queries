const express = require("express")
const carsRouter = express.Router()

carsRouter.get("/test", (req, res) => {
	res.json({
		msg: "cars route test ok !!",
	})
})


// GET return a list of all cars
carsRouter.get("/", (req, res) => {
	res.json({
		msg: "cars route test ok !!",
	})
})

module.exports = carsRouter
