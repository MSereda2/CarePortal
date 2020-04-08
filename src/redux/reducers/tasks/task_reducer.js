
import user4 from '../../../assets/use4.jpg';

import {task_types} from './task_types';

const initialState = {
    task: [],
    taskCounter: null,
    isShowModal: false,
}

let task_reducer = (state = initialState, action) => {
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
        case task_types.CREATE_TASK_SHOWMODAL:
            return {
                ...state,
                isShowModal: true
            }
        case task_types.CREATE_TASK_CLOSEMODAL:
            return {
                ...state,
                isShowModal: false
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
        default: return state
    }
}

export default task_reducer;