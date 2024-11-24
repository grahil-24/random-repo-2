import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/TodoList.css';  // Import the external CSS

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const deleteTodo = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
            });
            if(!res.ok){
                throw new Error('Error deleting the todo');
            }
            setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
        } catch(err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        const fetchTasks = async () => {
            setLoading(true);
            setError('');
            try {
                const res = await fetch('http://localhost:3000/api/todos');
                if (!res.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                const data = await res.json();
                setTasks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div id="todo-list">
            <h1>All Tasks</h1>
            {loading && <p>Loading tasks...</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
            {!loading && !error && tasks.length === 0 && <p>No tasks available</p>}
            {!loading && !error && tasks.length > 0 && (
                <ul>
                    {tasks.map((task) => (
                        <li key={task._id}>
                            <h2>{task.title}</h2>
                            <p>{task.description || 'No description provided'}</p>
                            <button className="delete" onClick={() => deleteTodo(task._id)}>
                                Delete Task
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={() => navigate('/create-todo')}>Create New Task</button>
        </div>
    );
};

export default TodoList;
