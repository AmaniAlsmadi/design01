import { createStore,combineReducers } from "redux";
import {taskReducer} from './taskReducer'


const allReducer = combineReducers({
    taskReducer: taskReducer
})
export const store = createStore(allReducer)