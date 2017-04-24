var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    text: String,
    done: Boolean
});

var Todo = mongoose.model("todo", TodoSchema);
module.exports = Todo;
