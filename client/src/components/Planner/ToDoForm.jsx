import React, { useState } from "react";
// import { CiCirclePlus } from "react-icons/ci";

function ToDoForm({ addToDo }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    //prevent default
    e.preventDefault();

    if (value.trim()) {
      //add todo
      addToDo(value);
      alert("New task added successfully.");

      //clear form after submission
      setValue("");
      setError("");
    } else {
      setError("Please enter a task in the above field.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ToDo-Form gap-5">
      <div className="relative w-full flex items-center rounded-lg">
        {/* <span className="absolute left-2 top-1/2 transform -translate-y-5 text-gray-500">
        <CiCirclePlus size={24}/>
        </span> */}

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input-form"
          placeholder="Add a new task..."
        />

        <button
          type="submit"
          className="absolute uppercase right-1 top-10 transform -translate-y-1/2 hover:bg-orange-100 text-gray-500 font-bold py-1 px-3 rounded-md transition duration-300 ease-in-out"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-600  mt-">{error}</p>}
    </form>
  );
}

export default ToDoForm;
