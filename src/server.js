'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middlewares/Logger.js');
const validator = require('./middlewares/Validator.js');

app.use(express.json());
app.use(logger);


app.get('/', (req, res) => {
    res.send('Welcome to my server! :)');
});

// app.use(validator);

//localhost:5000/person?name=Amjad
app.get('/person',validator,(req, res) => {  //another use of middleware
    const personOutput = {
        name: req.query.name
    }
    res.json(personOutput);
});

//localhost:5000/person/Amjad
app.get('/person/:name', (req, res) => {
    const personOutput = {
        name: req.params.name
    }
    res.json(personOutput);
});

//POST
app.post('/person', (req, res) => {
    res.json(req.body);
});

app.put('/person/:name', (req, res) => {
    res.json(req.body);
});


// //localhost:5000/middleware
// app.get('/middleware', validator(343), (req, res) => {
//     res.json({
//         name: req.query.name
//     });
// });

app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
    app.listen(port, () => {
        console.log(`The server is up on ${port}`);
    });
}

module.exports = {
    server: app,
    start: start
}