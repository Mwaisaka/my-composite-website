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
    <form onSubmit={handleSubmit} className="ToDo-Form gap-5">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input-form"
      />
      <button type="submit" className="todo-btn bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
        Edit Task
      </button>
    </form>
  );
}

export default EditToDoForm;
