'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TodoSchema = Schema({
    description: String,
    complete: {type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', TodoSchema);