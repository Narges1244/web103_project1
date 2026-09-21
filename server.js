const   express = require("express");

const app = express();

const PORT =  3000;

app.get("/", (req,res) => {
    res.send("welcome to my Project Explorer!");
});

app.listen(PORT, () => {
    console.log(`🎉 Server is running on port ${PORT}`);
});


