
import user4 from '../../../assets/use4.jpg';

import {task_types} from './task_types';
import {AddTask} from './task_utils';

const initialState = {
    task: [
        {   
            id: 3,
            img: user4,
            title: 'Написать текст по тз',
            description: 'Есть уже четкое и конкретное тз, все остальные нюансы расскажу лично.',
            cost: 1250,
            time: 1,
            btnStart: true,
            coordinates: {lat: 45.034249, lng: 38.985805},
            isShowModal: false
        }
    ],
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
                task: AddTask(state.task, action.payload, action.coordinates, action.userData)
            }
        default: return state
    }
}

export default task_reducer;