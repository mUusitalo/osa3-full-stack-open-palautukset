const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const Person = require('./models/person.js');

const PORT = process.env.PORT || 3001;

const app = express();

morgan.token('JSON', (req, res) => Object.entries(req.body).length ? JSON.stringify(req.body) : null);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :JSON'));
app.use(cors());
app.use(express.json());
app.use(express.static('build'));

app.get('/info', async (req, res) => {
    const date = new Date();
    const persons = await Person.find({});
    res.send(
        `<p>The phonebook contains ${persons.length} people's numbers</p>
        <p>${date.toString()}</p>`
    );
});

app.get('/api/persons', async (req, res, next) => {
    console.log("GET /api/persons searching DB");
    try {
        const response = await Person.find({});
        console.log("Response in GET /api/persons", response);
        res.json(response);
    } catch (e) {
        next(e);
    }
});

app.get('/api/persons/:id', async (req, res, next) => {
    try {
        const person = await Person.findById(String(req.params.id));
        if (person) {
            res.json(person);
        } else {
            res.status(404).end();
        }    
    } catch (e) {
        next(e);
    };
});

app.delete('/api/persons/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        if (await Person.findByIdAndDelete(id)) {
            res.status(204).end();
        } else {
            res.status(404).end();
        }
    } catch (e) {
        next(e);
    };
})

app.put('/api/persons/:id', async (req, res, next) => {
    const {name, number, id} = req.body;
    try {
        const newPerson = await Person.findByIdAndUpdate(id, {number}, {new: true, runValidators: true});
        if (!newPerson) {return res.status(404).end()};
        res.json(newPerson);
    } catch (e) {
        next(e);
    };
});

app.post('/api/persons', async (req, res, next) => {
    const {name, number} = req.body;
    const person = new Person({name, number});
    console.log(person);

    try {
        const newPerson = await person.save();
        res.json(newPerson);
    } catch(e) {
        next(e);
    };

});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

function errorHandler (error, req, res, next) {
    console.log(error);

    switch(error.name) {
        case 'CastError':
            return res.status(400).json({error: 'malformatted id'});
        case 'InputError':
            return res.status(400).json({error: error.message});
        case 'ValidationError':
            return res.status(400).json({error: error.message});
    };
    
    next(error);
};

function unknownEndpoint (req, res) {
    console.log("Unknown endpoint: ", req.url);
    res.status(404).json({error: 'unknown endpoint'});
};

app.use(unknownEndpoint);
app.use(errorHandler);
