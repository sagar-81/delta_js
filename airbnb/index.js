const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./db/db.js');
const ejs = require('ejs');
const listingRoute = require('./routing/listing_route.js');
const path = require('path');
const methodOverride = require('method-override');


const PORT = 3010;

app.use(express.json());

// app.use((req, res, next) => {
//     console.log(`➡️ ${req.method} ${req.url}`);
//     console.log('Request Body:', req.body);
//     const originalSend = res.send;
//     res.send = function (body) {
//         console.log('⬅️ Response:', body);
//         originalSend.call(this, body);
//     };

//     next();
// });
// app.use((req, res) => {
//     res.status(404).json({ status: false, message: "Invalid path" });
// });
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use('/', listingRoute);



app.get('/', (req, res) => {
    res.json({ status: true, result: "App is Running" });
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});