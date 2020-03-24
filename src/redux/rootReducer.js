import { combineReducers } from "redux";

// Reducers
import nav_reducer from './reducers/nav/nav_reducer';
import login_reducer from './reducers/login/login_reducer';
import task_reducer from './reducers/tasks/task_reducer';
import map_reducer from './reducers/map/map_reducer';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  // it's like our state `cause every reducer return state
  nav: nav_reducer,
  login: login_reducer,
  task: task_reducer,
  map: map_reducer,
  form: formReducer
});

export default rootReducer;
