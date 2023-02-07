import './App.css';
import { useState } from 'react';
import DoneList from './components/DoneList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (index) => {
    setDoneTodos([...doneTodos, todos[index]]);
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className='container'>
      <div className='todo'>
        <h1>Todo</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} completeTodo={completeTodo} />
      </div>
      <div className='done'>
        <h1>Done</h1>
        <DoneList doneTodos={doneTodos} />
      </div>
    </div>
  );
}

export default App;