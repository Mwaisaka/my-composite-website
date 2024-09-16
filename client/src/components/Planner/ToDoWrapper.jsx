import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import EditToDoForm from "./EditToDoForm";
import ToDo from "./ToDo";
import "./ToDoList.css";

function ToDoWrapper() {
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setToDos(todos.filter((todo) => todo.id !== id));
    alert("Task deleted successfully.");
  };

  const toggleComplete = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setToDos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const clearTasks = () => {
    setToDos([]);
  };

  //Filter incomplete tasks from the "Tasks Left" count
  const tasksLeftCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="ToDoWrapper ">
      <div>
        <h1 className="font-bold">MY TASKS</h1>
        <ToDoForm addToDo={addToDo} />
        {/* display todos */}
        <div className="bg-gray-400 w-[100%] py-2 border rounded-lg">
          <div className="flex items-center justify-between w-[95%] mb-4 ml-4 text-xl">
            <h3>Tasks Left [{tasksLeftCount}]</h3>
            <button className="transform transition duration-300 ease-in-out hover:scale-110" onClick={clearTasks}>Clear all tasks</button>
          </div>

          {todos.map((todo) =>
            todo.isEditing ? (
              <EditToDoForm editToDo={editTask} task={todo} />
            ) : (
              <ToDo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default ToDoWrapper;
