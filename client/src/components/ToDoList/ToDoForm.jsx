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
        <form onSubmit={handleSubmit} className='ToDoForm'>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} className='todo-input' placeholder='What is the task today?'/>
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
};

export default ToDoForm;
