import React, { useState, useCallback } from 'react';
import TodoList from './Components/Todolist';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Learn useCallback', completed: false },
  ]);

  const [task, setTask] = useState('');

  const addTask = useCallback(() => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: prevTodos.length + 1, task, completed: false },
    ]);
    setTask('');
  }, [task]);

  const toggleTaskCompletion = useCallback(id => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <TodoList todos={todos} onToggle={toggleTaskCompletion} />
    </div>
  );
}

export default App;
