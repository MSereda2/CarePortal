import {app_types} from './app_type';
import {InitialStateTypeApp} from './app_typeTS';

const INITIAL_STATE: InitialStateTypeApp = {
  INITIALIZED: false,
}

const app_reducer = (state = INITIAL_STATE, action: any): InitialStateTypeApp => {
  switch(action.type) {
    case app_types.SET_INITILIZED:
      return{
         ...state,
         INITIALIZED: true
      }


    default: return state;
  }
}

export default app_reducer;