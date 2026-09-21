const   express = require("express");
const path = require("path");
const app = express();
const projectsRouter = require("./routes/projects");

app.use(express.static(path.join(__dirname, "../client")));
app.use("/api/projects", projectsRouter);



const PORT =  3000;



app.listen(PORT, () => {
    console.log(`🎉 Server is running on port ${PORT}`);
});


