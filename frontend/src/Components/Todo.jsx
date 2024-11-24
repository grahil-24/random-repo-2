import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";

const Todo = () => {
    const [error, setError] = useState('');
    const [todo, setTodo] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/');
    }

    useEffect(() => {
        setError('');

        const getTodo = async() => {
            try {
                const res = await fetch(`http://localhost:3000/api/todos/${id}`);
                if (!res.ok) {
                    throw new Error('Couldnt fetch the todo with that id');
                }
                const todo = await res.json();
                setTodo(todo);
            } catch (err) {
                setError(err.message);
            }
        }

        getTodo();
    }, [id]); //rerun only if id changes

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {!error && todo && (
                <div>
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                </div>
            )}
            <button onClick={backToHome}>Back to Home</button>
        </div>
    );
}

export default Todo;
