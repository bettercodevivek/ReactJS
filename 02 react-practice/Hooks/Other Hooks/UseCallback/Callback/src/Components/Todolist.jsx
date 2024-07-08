// TodoList.js
import React from 'react';
import TodoItem from './Todoitem';

function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
