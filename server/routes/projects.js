const express = require("express");
const router = express.Router();

const ProjectsController = require("../controllers/projects");

router.get("/", ProjectsController.getProjects);
router.get("/:slug", ProjectsController.getProjectBySlug);

module.exports = router;