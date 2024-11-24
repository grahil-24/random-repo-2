import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import '../styles/TodoForm.css';

const TodoForm = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setSuccess('');
        setError('');

        try{
            const res = await fetch('http://localhost:3000/api/todos', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if(!res.ok){
                throw new Error('Error creating a new todo');
            }
            setSuccess('Task created successfully!');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }catch(err) {
            setError(err.message);
        }
    };

    return (
        <div id="todo-form">
            {error && <p id="error-message">{error}</p>}
            {success && <p id="success-message">{success}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>New Task</h1>
                <div>
                    <label htmlFor="todo-title">Title *  </label>
                    <input type="text" id="todo-title"
                           placeholder="Enter title" {...register('title', {required: 'Title is required'})} />
                    {errors.title && <p style={{color: 'red'}}>{errors.title.message}</p>}
                </div>
                <div>
                    <label htmlFor="todo-description">Description   </label>
                    <input type="text" id="todo-description" placeholder="Enter description" {...register('description')} />
                </div>
                <div>
                    <input type="submit" value="Create Task"/>
                </div>
            </form>
        </div>
    );
};

export default TodoForm;
