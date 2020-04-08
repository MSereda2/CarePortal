import {task_types} from './task_types';

export let showModal = (id) => ({
    type: task_types.SHOW_MODAL,
    id
})

export let closeModal = (id) => ({
    type: task_types.CLOSE_MODAL,
    id
})

export let createTaskShowModal = (data) => ({
    type: task_types.CREATE_TASK_SHOWMODAL,
    data,
})

export let createTaskCloseModal = (data) => ({
    type: task_types.CREATE_TASK_CLOSEMODAL,
    data,
})

export let addTask = (data) => ({
    type: task_types.ADD_TASK,
    payload: data,
    
})

export let getTask = (data) => ({
    type: task_types.GET_TASK,
    payload: data
})

export let setTaskCounter = () => ({
    type: task_types.SET_TASK_COUNTER,
})