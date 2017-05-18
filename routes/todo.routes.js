let express = require('express');
let router = express.Router();
let todoController = require('../src/controllers/todo.controller');

/* ToDo routes */
router.post('/todo', todoController.saveTodo);
router.get('/todo', todoController.getTodos);
router.put('/todo/:id', todoController.updateTodo);
router.delete('/todo/:id', todoController.deleteTodo);

module.exports = router;
