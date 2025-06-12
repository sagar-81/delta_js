const express = require("express");
const { post } = require('./data');
const app = express();
const path = require('path');
const PORT = 4300;

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/views'))
app.set(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/check', (req, res) => {
    return res.render('index',{post});
})


//get post 
app.get('/post', (req, res) => {
    return res.json({ 'data': post });
});

app.post('/post/:id', async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const id = req.params.id;
    var data = post.push({ id, name, age });
    return res.json({ 'data': data });
});

app.put('/post/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;
    const index = post.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    post[index] = { id, name, age };
    return res.json({ data: post[index] });
});


app.delete('/post/:id', async (req, res) => {
    const id = req.params.id;
    var data = await post.pop();
    return res.json({ 'data': data });
});
app.listen(PORT, () => {
    console.log(`App is running on ${PORT} port.`)
});