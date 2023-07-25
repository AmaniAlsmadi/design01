import { v4 as uuidv4 } from 'uuid';

export const initState = {
    task: "",
    todos: []
}
export const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATETASK":
            return { ...state, task: action.pl }
        case "ADDTASK":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uuidv4(),
                        task: state.task,
                        completed: false,
                        isEditing: false,
                    },
                ],
            };
        case "TOGGLE_TODO":
            return {
                ...state,
                todos:
                    state.todos.map((todo) => todo.id === action.pl ? { ...todo, completed: !todo.completed } : todo)
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos:
                    state.todos.filter((todo) => todo.id !== action.pl)
            }
        default:
            return { ...state }
    }
}