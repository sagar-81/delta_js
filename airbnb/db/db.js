const mongoose = require('mongoose');

const mondoDBConnection = mongoose.connect('mongodb://0.0.0.0:27017/Airnub').then((e) => {
    console.log(`DB Connected Successfully`);
}).catch((e) => {
    console.log(`Error to Connect ${e}`);
});

module.exports = mondoDBConnection;

