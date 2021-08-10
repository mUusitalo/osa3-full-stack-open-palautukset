//mongo.js
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const DB_URL = process.env.DB_URL

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    console.log(`Connected to database ${DB_URL}`)
  } catch (e) {
    console.log(`An error occurred while connecting to ${DB_URL}`, e)
  }
}

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
    unique: true,
  },
  number: {
    type: String,
    minlength: 8,
    required: true,
  },
  date: Date
})

personSchema.plugin(uniqueValidator, { message: '{VALUE} already exists in the database' })

personSchema.set('toJSON', {
  transform: function(doc, ret) {
    ret.id = ret._id.toString()
    delete ret._id
    delete ret.__v
  }
})

connectToDatabase()
module.exports = mongoose.model('Person', personSchema)
