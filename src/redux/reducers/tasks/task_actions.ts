import { task_types } from './task_types';
import { 
    ShowModalType,
    CloseModalType,
    AddTaskType,
    InitialStateTypeTask,
    GetTaskType,
    SetTaskCounterType } from './task_typesTS';

// Actions Types

export let showModal = (id: number):ShowModalType => ({
    type: task_types.SHOW_MODAL,
    id: id
})

export let closeModal = (id: number):CloseModalType => ({
    type: task_types.CLOSE_MODAL,
    id
})

export let addTask = (data: InitialStateTypeTask):AddTaskType => ({
    type: task_types.ADD_TASK,
    payload: data,
    
})

export let getTask = (data: InitialStateTypeTask):GetTaskType => ({
    type: task_types.GET_TASK,
    payload: data
})

export let setTaskCounter = (): SetTaskCounterType => ({
    type: task_types.SET_TASK_COUNTER,
})

export let toggleFetching = (isFetch: boolean) => ({
    type: task_types.TOGGLE_FETCHING,
    isFetch
})