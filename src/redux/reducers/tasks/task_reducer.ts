import {task_types} from './task_types';

// TypesTS
import { InitialStateType } from '../tasks/task_typesTS';

// Reducer Type



const initialState: InitialStateType = {
    task: [] ,
    taskCounter: null,
    isFetching: false
}

let task_reducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case task_types.SHOW_MODAL:
            return {
                ...state,
                task: state.task.map(el => {
                    if(el.id === action.id) {
                        return{ ...el, isShowModal: true}
                    } else {
                        return {...el, isShowModal: false}
                    }
                })
            }
        case task_types.CLOSE_MODAL:
            return {
                ...state,
                task: state.task.map(el => {
                    if(el.id === action.id) {
                        return{ ...el, isShowModal: false}
                    } 
                    return el;
                })
            }   
        case task_types.ADD_TASK:
            return {
                ...state,
                task: [...state.task, action.payload]
            }
        case task_types.GET_TASK:
            return {
                ...state,
                task: [...action.payload]
            }
        case task_types.SET_TASK_COUNTER:
            return {
                ...state,
                taskCounter: state.task.length
            }
        case task_types.TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetch
            }
        default: return state
    }
}

export default task_reducer;
