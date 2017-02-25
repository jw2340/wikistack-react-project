const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = app;

app.use(morgan('dev')); //logging middleware
app.use(express.static(path.join(__dirname, '../public'))); //serving up static files (e.g. css files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/wiki', require('./routes/wiki'));
app.use('/api/users', require('./routes/users'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//error handling middleware - MUST have all 4 parameters
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal Error");
});
