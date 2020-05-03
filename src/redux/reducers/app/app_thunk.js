import {subscribeFromAuth} from '../login/login_thunk';
import {SetUserLocationCreator} from '../map/map_thunk';
import {GetTaskThunkCreator} from '../tasks/task_thunk';

export const initializeThunk = () => {
  
  return async (dispatch) => {
     dispatch(subscribeFromAuth());
     dispatch(SetUserLocationCreator());
     dispatch(GetTaskThunkCreator());
  }
}