const express = require("express");

const app = express();

app.use((req, res, next) => {
    var {query} = req.query;

    if (query === "PerformAction") {
        return next();
    }

    return res.json({ "status": "ACCESS DENIED." });
});

app.get("/helthCheck", (req, res) => {
    return res.send("App is Running well")
});


app.use((req, res) => {
    return res.json({ "status": "Invalid Route" })
})

app.listen(4300, () => {
    console.log("App is Running on 4300 port")
});