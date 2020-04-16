import {subscribeFromAuth} from '../login/login_thunk';
import {SetUserLocationCreator} from '../map/map_thunk';
import {CreateTaskThunkCreator, GetTaskThunkCreator} from '../tasks/task_thunk';
import {set_initialized} from './app_actions';

export const initializeThunk = () => {
 

  
  return async (dispatch) => {
     dispatch(subscribeFromAuth());
     dispatch(SetUserLocationCreator());
     dispatch(GetTaskThunkCreator());
  }
}