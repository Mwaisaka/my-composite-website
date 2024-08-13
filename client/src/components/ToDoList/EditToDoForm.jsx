import React, { useState } from "react";

function EditToDoForm({ editToDo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    //edit todo
    editToDo(value, task.id);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit} className="ToDo-Form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-btn">
        Edit Task
      </button>
    </form>
  );
}

export default EditToDoForm;
