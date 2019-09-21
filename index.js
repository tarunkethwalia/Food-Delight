const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Url = require('./public/modals/environment.json');
const cors = require('cors');

const app = express();

mongoose.connect(Url.env.MongoUrl || process.env.MongoUrl, { useNewUrlParser: true });

app.use(cors());

app.use(('/uploads'),express.static('uploads'));
app.use(bodyParser.json());

app.use('/', require('./public/controllers/menuController'));
app.use('/', require('./public/controllers/UserController'));
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

const port = process.env.port || 1800;
app.listen(port, function () {
    console.log('Server Started at port: '+port);
});