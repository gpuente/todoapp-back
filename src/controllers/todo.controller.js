'use strict'
let Todo = require('../models/todo.model');

async function getTodos(req, res){
    try{
        let todo = new Todo();
        let todos = await todo.find();
        if(!todos) return res.status(500).send({message: global.st.err_get_todos});
        res.status(200).send({todos: todos});
    }catch(err){
        res.status(500).send({message: global.sterr_get_todos});
    }
}


async function deleteTodo(req, res){
    try{
        let todo = new Todo();
        let todoRemoved = await todo.findByIdAndRemove(req.body.id);
        if(!todoRemoved) return res.status(500).send({message: global.st.err_delete_todo});
        res.status(200).send({removed: todoRemoved});
    }catch(err){
        res.status(500).send({message: global.st.err_delete_todo});
    }
}


async function saveTodo(req, res){
    try{
        let todo = new Todo();
        todo.name = req.body.name;
        todo.description = req.body.description;
        let todoStored = await todo.save();
        if(!todoStored) return res.status(500).send({message: global.st.err_save_todo});
        res.status(200).send({todo: todo});
    }catch(err){
        res.status(500).send({message: global.st.err_save_todo});
    }
}

async function updateTodo(req, res){
    try{
        let id = req.params.id;
        let todo = new Todo();
        let todoUpdated = await todo.findByIdAndUpdate(id, {complete: req.body.complete});
        if(!todoUpdated) return res.status(500).send({message: global.st.err_update_todo});
        res.status(200).send({todo: todoUpdated});
    }catch(err){
        res.status(500).send({message: global.st.err_update_todo});
    }
}

module.exports = {
    getTodos,
    deleteTodo,
    saveTodo,
    updateTodo
}