import {task_types} from './task_types';

export let showModal = (id) => ({
    type: task_types.SHOW_MODAL,
    id
})

export let closeModal = (id) => ({
    type: task_types.CLOSE_MODAL,
    id
})