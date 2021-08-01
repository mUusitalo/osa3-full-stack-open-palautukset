//mongo.js
const mongoose = require('mongoose');

const cliArguments = process.argv;

const DB_PASSWORD = cliArguments[2];

const DB_URL = `mongodb+srv://puhelinluettelo:${DB_PASSWORD}@cluster0.oltei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true });

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
    date: Date
});

const Person = mongoose.model('Person', personSchema);

async function findAllPersons() {
    const allPersons = await Person.find({});
    console.log("Phonebook:");
    allPersons.forEach(person => {
        console.log(`${person.name} ${person.number}`);
    });
}

async function addNewPerson() {
    const [name, number] = [... cliArguments].splice(3, 2);
    const date = new Date();

    const newPerson = new Person({name, number, date});
    const result = await newPerson.save();

    console.log(`Added ${result.name} number ${result.number} to phonebook `);
}

function run() {
    switch(cliArguments.length) {
        case 3:
            return findAllPersons();
        case 5:
            return addNewPerson();
        default:
            console.log("Invalid number of command line arguments");
            mongoose.connection.close();
            process.exit(1);
    };
};

run().then(() => mongoose.connection.close());
