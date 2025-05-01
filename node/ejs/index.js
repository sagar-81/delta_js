const express = require('express');
const app = express();
const path =  require("path");
const PORT = 4300;


app.set('view engine', 'ejs');
app.set("views",path.join(__dirname),"/views");

app.get('/', (req, res) => {
    res.render('home.ejs')
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT} PORT.`)
});