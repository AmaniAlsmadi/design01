import { React } from 'react';
import style from "../css/style.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export default function Todo({ task, dispatch }) {

    return (
        <div className={style.todo}>
            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}> {task.task}</p>
            <span>
                <input type='checkbox' checked={task.completed}
                    onChange={() => dispatch({
                        type: "TOGGLE_TODO",
                        pl: task.id
                    })}></input>
                <FontAwesomeIcon icon={faTrashCan} className={style.icon}
                    onClick={() => dispatch({
                        type: "DELETE_TODO",
                        pl: task.id
                    })} />
            </span>
        </div>

    )
}
