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
      <div className="relative w-full flex items-center rounded-lg">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input-form"
        />
        <button
          type="submit"
          className="absolute uppercase right-1 top-10 transform -translate-y-1/2 hover:bg-orange-100 text-gray-500 font-bold py-1 px-3 rounded-md transition duration-300 ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default EditToDoForm;
