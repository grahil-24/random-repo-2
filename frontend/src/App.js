import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import Todo from './Components/Todo';
import './App.css';

const App = () => {
  return (
      <div id="todo-app">
          <Router>
            <Routes>
              <Route path="/" element={<TodoList />} />
              <Route path="/:id" element={<Todo />}/>
              <Route path="/create-todo" element={<TodoForm />} />
            </Routes>
          </Router>
      </div>
  );
};

export default App;
