import { combineReducers } from "redux";

// Reducers
import nav_reducer from './reducers/nav/nav_reducer'


const rootReducer = combineReducers({
  // it's like our state `cause every reducer return state
  nav: nav_reducer,
});

export default rootReducer;
