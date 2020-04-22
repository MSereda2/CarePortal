import { combineReducers } from "redux";

// Reducers
import app_reducer from './reducers/app/app_reducer';
import nav_reducer from './reducers/nav/nav_reducer';
import login_reducer from './reducers/login/login_reducer';
import task_reducer from './reducers/tasks/task_reducer';
import map_reducer from './reducers/map/map_reducer';
import profile_reducer from './reducers/profile/profile_reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  // it's like our state `cause every reducer return state
  app: app_reducer,
  nav: nav_reducer,
  login: login_reducer,
  task: task_reducer,
  map: map_reducer,
  profile: profile_reducer,
  form: formReducer
});

export default rootReducer;
