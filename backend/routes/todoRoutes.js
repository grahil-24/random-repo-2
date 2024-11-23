const express = require('express');
const router = express.Router();
const {createTodo, getTodoById, deleteTodoById, getAllTodos} = require('../controllers/todoController');

router.post('/', createTodo);
router.get('/:id', getTodoById);
router.delete('/:id', deleteTodoById);
router.get('/', getAllTodos);

module.exports = router;
