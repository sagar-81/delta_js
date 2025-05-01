const express = require("express");
const app = express();
const PORT = 4300;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/apple', (req, res) => {
    var id = req.query.search;
    return res.send(`<h1>Sagar</h1> <ul><li>Mango</li><li>${id}</li></ul>`);
});

app.get('/:username/:id', (req, res) => {
    return res.json({ 'Data': `Username is ${req.params.username}  and his Id is ${req.params.id} ` })
});

app.use((req, res) => {
    res.status(404).send('<h1>404</h1><p>No path exist</p>');
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
});