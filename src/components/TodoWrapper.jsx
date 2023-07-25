import React, { useReducer } from 'react';
import { initState, taskReducer } from '../redux/taskReducer';
import style from "../css/style.module.css";
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import TodoForm from './TodoForm';
uuidv4();


export default function TodoWrapper() {

    const [state, dispatch] = useReducer(taskReducer, initState);


    const addTodo = todo => {
        dispatch({
            type: "ADDTASK",
            pl: todo
        });
        console.log(state.todos);
    }
    return (
        <div className={style.todoWrapper}>
            <div className={style.container}>
                <div>
                    <h1>Get Things Done!</h1>
                    <TodoForm addTodo={addTodo} state={state} dispatch={dispatch} />
                    <div className={style.task}>
                        {state.todos.map((todo, index) => (
                                <Todo task={todo} key={index} dispatch={dispatch} />

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
