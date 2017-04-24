const express = require('express')
const debug = require('debug')('app:server')
const path = require('path')
const compress = require('compression')
const routes = require('./routes')
const mongoose = require('mongoose');

const app = express()
mongoose.connect('mongodb://localhost/todosdb');

// Apply gzip compression
app.use(compress())
app.use(require('body-parser').json());

app.use('/api/todos', routes);

app.use(express.static(path.resolve('/public')))


app.listen(8080)

