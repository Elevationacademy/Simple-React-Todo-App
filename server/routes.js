var express = require('express')
var router = express.Router()
var Todo = require('./TodoModel');

router.get('/', function (req, res) {

    Todo.find(function(err, data){
        res.send(data);
    });

})


router.post('/add', function (req, res) {

    var todo = new Todo(req.body);

    todo.save(function(data){
        res.send(todo);
    });
})

router.put('/update', function (req, res) {

    console.log('asdasddas')
    Todo.findByIdAndUpdate(req.body._id, {$set:req.body}, {new: true}, function(err, data){
        res.send(data);
    });


})


module.exports = router
