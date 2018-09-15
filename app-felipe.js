var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://rattu:2cagaregras@ds028559.mlab.com:28559/books_api', function(){
    return console.log('Conectado moral! o/');
});

app.use(bodyParser.json());

app.get('/', function(request, response){
    Book.find({}, function(err, res){
        if(err) return console.log(err);

        response.send(res);
    });
})

app.get('/:id', function(request, response){
    var id = request.params.id;

    Book.find({_id: id}, function(err, res){
        if (err) return console.log(err);

        response.send(res);
    });
})

app.post('/', function(request, response){
    var book = request.body;
    var newBook = Book(book);

    newBook.save(function(err, res){
        if(err) {
            response.send(err);
        }

        response.send(newBook);
    });
});

app.put('/:id', function(request, response){
    var id = request.params.id;
    var book = request.body;

    Book.findOneAndUpdate({ _id: id }, book, function(err, res){
        if(err) {
            response.send(err);
        }

        response.sendStatus(200);
    });
});

app.delete('/:id', function(request, response){
    var id = request.params.id;

    Book.remove({ _id: id }, function(err, res){
        if(err) {
            response.send(err);
        }

        response.sendStatus(204);
    });
});

app.listen(3000, function(){
    return console.log('App is running...');
});