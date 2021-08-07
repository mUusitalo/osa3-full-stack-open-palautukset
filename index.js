const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const Person = require('./models/person.js');

const PORT = process.env.PORT || 3001;

const db = {
    "persons": [
        {
            "name": "Arto Hellas",
            "number": "040-123456",
            "id": 1
        },
        {
            "name": "Ada Lovelace",
            "number": "39-44-5323523",
            "id": 2
        },
        {
            "name": "Dan Abramov",
            "number": "12-43-234345",
            "id": 3
        },
        {
            "name": "Mary Poppendieck",
            "number": "39-23-6423122",
            "id": 4
        }
    ]
};

const app = express();

app.use(cors())
app.use(express.json());

morgan.token('JSON', (req, res) => Object.entries(req.body).length ? JSON.stringify(req.body) : null);
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :JSON'));

app.use(express.static('build'))


app.get('/info', (req, res) => {
    const date = new Date();
    res.send(
        `<p>The phonebook contains ${db.persons.length} people's numbers</p>
        <p>${date.toString()}</p>`
    );
});

app.get('/api/persons', async (req, res) => {
    console.log("GET /api/persons searching DB");
    const response = await Person.find({});
    console.log("Response in GET /api/persons", response);
    res.json(response);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = db.persons.find(p => p.id === id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const before = db.persons.length;
    db.persons = db.persons.filter(p => p.id !== id);

    if (db.persons.length < before) {
        res.status(204).end();
    } else {
        res.status(404).end();
    }
})

app.post('/api/persons', async (req, res) => {
    const {name, number} = req.body;
    const person = new Person({name, number});
    console.log(person);

    const errorMessages = getInputErrorMessages(person);

    if (errorMessages.length == 0) {

        try {
            const newPerson = await person.save();
            res.json(newPerson);
        } catch(e) {
            console.log(e);
            res.status(500).end();
        };

    } else {
        console.log(errorMessages)
        res.status(400).json({errors: errorMessages});
    };
});

function getInputErrorMessages({name, number}) {

    const errorMap = {
        'Name must not be blank': !name,
        'Number must not be blank': !number,
        //'Name already exists in database': db.persons.some(existing => existing.name === name)
    };

    const errors = Object.keys(errorMap).filter(key => errorMap[key]);
    console.log(errors)
    return errors
}

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
