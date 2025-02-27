import React from "react";

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button className="toggle-btn" onClick={() => onToggle(todo.id)}>
        搞定
      </button>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        删除
      </button>
    </li>
  );
}

export default TodoItem;
