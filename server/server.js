const   express = require("express");
const path = require("path");
const app = express();
const projectsRouter = require("./routes/projects");

app.use(express.static(path.join(__dirname, "../client")));
app.use("/api/projects", projectsRouter);



const PORT =  3000;

app.get("/projects/:id", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../client/project.html")
    );
});

app.use((req, res) => {
    res.status(404).sendFile(
        path.join(__dirname, "../client/404.html")
    );
});

app.listen(PORT, () => {
    console.log(`🎉 Server is running on port ${PORT}`);
});




