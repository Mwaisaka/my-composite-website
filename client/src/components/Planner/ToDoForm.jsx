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

      //clear form after submission
      setValue("");
      setError("");
    } else {
      setError("Please enter a task in the above field.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="ToDo-Form gap-5">
      <div className="relative w-[100%] flex items-center  rounded-lg px-0">
        {/* <span className="absolute left-2 top-1/2 transform -translate-y-5 text-gray-500">
        <CiCirclePlus size={24}/>
        </span> */}
       
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input-form"
          placeholder='Add a new task...'
          
        />

        {error && <p className="text-red-600 absolute  left-0">{error}</p>}
      </div>

      <button
        type="submit"
        className="todo-btn bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out"
      >
        Add Task
      </button>
    </form>
  );
}

export default ToDoForm;
