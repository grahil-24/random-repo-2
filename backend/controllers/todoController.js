const Todo = require('../models/todoModel');

const createTodo = async(req, res) => {
    try{
        const {title, description} = req.body;
        const todo = new Todo({title, description});
        await todo.save();
        res.status(201).json(todo);
    }catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
}

const deleteTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.log(error.message);
        res.status(404).json({message: 'error encountered while trying to delete todo'});
    }
};

const getAllTodos = async(req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(err){
        console.log(err.message);
        res.status(500).json({error: 'error getting todos'});
    }
}

const getTodoById = async(req, res) => {
    const {id} = req.params;
    try {
        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({message: 'Todo with that id was not found'});
        }
        res.json(todo);
    }catch(err){
        console.log(err.message);
        res.status(404).json({message: 'error getting the tour'});
    }
}

module.exports = {createTodo, getTodoById, deleteTodoById, getAllTodos};
