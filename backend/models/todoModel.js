const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;