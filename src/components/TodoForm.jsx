import React from 'react';
import style from "../css/style.module.css";


export default function TodoForm({ state,addTodo, dispatch }) {
    const handleSubmit = e => {
        e.preventDefault();
        addTodo(state.task);
        dispatch({
            type: 'CREATETASK',
            pl: ""
        });
    }
    
    return (
        <form className={style.todoform} onSubmit={handleSubmit}>
            <input type="text" className={style.todoInput} placeholder='What is the task today?'
                value={state.task} onChange={(e) => dispatch({
                    type: 'CREATETASK',
                    pl: e.target.value
                })} />
            <button type='submit' className={style.todobtn}>Add Task</button>
        </form>
    )
}
