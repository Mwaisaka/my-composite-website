import React, {useState} from 'react';

function ToDoForm ({addToDo}) {
    const [value, setValue]=useState('');

    const handleSubmit = (e) => {
        //prevent default
        e.preventDefault();

        if(value){
            //add todo
            addToDo(value);

            //clear form after submission 
            setValue('');
        }
    };

    return(
        <form onSubmit={handleSubmit} className='ToDo-Form gap-5'>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className='todo-input-form' placeholder='What is the task today?'/>
            <button type="submit" className='todo-btn bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out'>Add Task</button>
        </form>
    )
};

export default ToDoForm;
