const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://0.0.0.0:27017/sagar').then((e) => {
    console.log(`Mongo DB Connected Successfully ✅`)
}).catch((e) => {
    console.log(`Error to Connect ${e.message}`)
});

module.exports = { connection };