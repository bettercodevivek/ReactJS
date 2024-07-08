import React from 'react';

function TodoItem({ todo, onToggle }) {
  console.log(`Rendering TodoItem: ${todo.id}`);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.task}
    </li>
  );
}

export default React.memo(TodoItem);
