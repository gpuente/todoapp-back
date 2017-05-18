'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TodoSchema = Schema({
    name: String,
    description: String,
    complete: {type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', TodoSchema);