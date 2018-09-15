const express = require('express');
const Book = require('../models/book');
const BooksController = require('../controllers/books');

const booksControler = new BooksController(Book);
const router = express.Router();

router.get('/', (req, res) => booksControler.get(req, res));
router.get('/:id', (req, res) => booksControler.getById(req, res));
router.post('/', (req, res) => booksControler.create(req, res));
router.put('/:id', (req, res) => booksControler.update(req, res));
router.delete('/:id', (req, res) => booksControler.remove(req, res));

module.exports = router;
