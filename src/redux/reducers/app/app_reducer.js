import {app_types} from './app_type';

const INITIAL_STATE = {
  INITIALIZED: false
}

const app_reducer = (state = INITIAL_STATE, action) => {
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