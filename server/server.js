const path = require('path');

const express = require('express');

var port = process.env.PORT || 5000;

var app = express();

var publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath))
app.use(express.json());



app.get('/temp', (req, res) => {
    res.send("sample text")
})











app.listen(port, () => {
    console.log(`Connected to Port ${port}`);
})

module.exports = {app}