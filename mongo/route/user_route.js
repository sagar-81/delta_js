const { userData } = require('../schema/user_schema');
const express = require('express');
const app = express();


app.get('/', async (req, res) => {
    try {
        var data = await userData.find();
        return res.json({ status: true, data: data });
    } catch (error) {
        return res.json({ status: false, message: error.message });
    }
});

app.get('/findById/:id', async (req, res) => {
    try {
        const data = await userData.findById(req.params.id);
        return res.json({ status: true, data: data });

    } catch (error) {
        return res.json({ status: false, message: error.message });
    }
});

app.post('/addUser', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const data = new userData({ name: name, email: email, password: password });
        const result = await data.save();
        return res.json({ status: true, data: result });
    } catch (error) {
        return res.json({ status: false, message: error.message });
    }
});


app.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await userData.findByIdAndDelete(id);

        return res.json({ status: true, data: updateData })
    } catch (error) {
        return res.json({ status: false, message: error.message });
    }

});

app.put('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body;

        const updateData = await userData.findByIdAndUpdate(
            id,
            { name: name, email: email, password: password },
            { new: true }
        );

        if (!updateData) {
            return res.json({ status: false, message: "User not found" });
        }

        return res.json({ status: true, data: updateData });
    } catch (error) {
        return res.json({ status: false, message: error.message });
    }
});


module.exports = app;