class BooksController {
    constructor(Book) {
        this.Book = Book;
    }

    get(req, res) {
        return this.Book.find({})
            .then(books => res.send(books)) //Recebe o books do controller
            .catch(err => res.status(400).send(err.message)); //Return mensagem de erro
    }
    getById(req, res) {
        const id = req.params.id;

        return this.Book.find({ _id: id })
            .then(books => res.send(books))
            .catch(err => err.status(400).send(err.message));
    }

    create(req, res) {
        const book = req.body;
        const newBook = this.Book(book);

        return newBook.save()
            .then(() => res.status(201).send(newBook))
            .catch(err => res.status(422).send(err.message));
    }

    update(req, res) {
        const id = req.params.id;
        const book = req.body;

        return this.Book.findOneAndUpdate({ _id: id}, bool)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(422).send(err.message));
    }

    remove(req, res) {
        const id = req.params.id;

        return this.Book.remove({ _id: id})
            .then(() => res.sendStatus(204))
            .catch(err => res.status(400).send(err.message));
    }
}

module.exports = BooksController;
