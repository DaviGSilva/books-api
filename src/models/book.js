const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String
});

const Book = mongoose.model('Book', schema);

module.exports = Book;
