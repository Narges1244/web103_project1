const express = require("express");
const router = express.Router();
const projects = require("../data/projects");

router.get("/", (req, res) => {
    res.json(projects);
});

router.get("/:id", (req, res) => {
    const projectId = req.params.id;
    const project = projects.find(
        project => project.id === projectId
        );
    res.json(project);

});

module.exports = router;