const connection = require('./db');
const express = require('express');
const app = express();
const userRoute = require('./route/user_route');

app.use(express.json());
app.use('/user', userRoute);

app.listen(4300, () => {
    console.log(`App is Running on 4300`);
});

