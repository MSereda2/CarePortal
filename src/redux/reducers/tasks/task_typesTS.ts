import {task_types} from './task_types';

// Action Creator Types
export type ShowModalType = {
  type: typeof task_types.SHOW_MODAL,
  id: number
}

export type CloseModalType = {
  type: typeof task_types.CLOSE_MODAL,
  id: number
}

export type AddTaskType = {
  type: typeof task_types.ADD_TASK,
  payload: InitialStateTypeTask
}

export type GetTaskType = {
  type: typeof task_types.GET_TASK,
  payload: InitialStateTypeTask
}

export type SetTaskCounterType = {
  type: typeof task_types.SET_TASK_COUNTER
}

export type ToggleFetchingType = {
  type: typeof task_types.TOGGLE_FETCHING
}

// Action Reducer
export type InitialStateTypeTask = {
  coordinates: {lat: number, lng: number},
  cost: string,
  createAt: string,
  description: string,
  displayName: string,
  id: string,
  phoneNumber: string,
  photoURL: string,
  time: string,
  title: string
}

export type InitialStateType = {
  task: Array<InitialStateTypeTask>,
  taskCounter: number | null,
  isFetching: boolean
}