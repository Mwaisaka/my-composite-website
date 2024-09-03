import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from "uuid";
import EditToDoForm from './EditToDoForm';
import ToDo from './ToDo';
import './ToDoList.css'

function ToDoWrapper() {
    const [todos, setToDos] = useState([])

    const addToDo = (todo) => {
        setToDos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false }
        ])
    };

    const deleteTodo = (id) => setToDos(todos.filter((todo) => todo.id !== id));

    const toggleComplete = (id) => {
        setToDos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const editTodo = (id) => {
        setToDos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
            )
        );
    }

    const editTask = (task, id) => {
        setToDos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
            )
        );
    };

    return (

        <div className="ToDoWrapper">
            <h1>Getting Things Done!</h1>
            <ToDoForm addToDo={addToDo} />
            {/* display todos */}
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




    );

}
export default ToDoWrapper;