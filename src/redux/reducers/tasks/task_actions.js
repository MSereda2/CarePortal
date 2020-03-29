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