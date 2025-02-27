import React, { useState } from "react";

function TodoInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    onAdd(inputValue);
    setInputValue("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleAdd()}
      />
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}

export default TodoInput;
