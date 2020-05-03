import {app_types} from './app_type';

// Actions types
export type set_initializedType = {
  type: typeof app_types.SET_INITILIZED
}

// Reducers types
export type InitialStateTypeApp = {
  INITIALIZED: boolean
}