const express = require("express")
const Projects = require("./projects-model")

const router = express.Router()

router.get("/projects", async (req, res, next) => {
	try {
		const projects = await Projects.find()
		res.json(projects)
	} catch(err) {
		next(err)
	}
})

module.exports = router