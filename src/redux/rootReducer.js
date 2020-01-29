import { combineReducers } from "redux";

import taskReducer from "./task/task.reducer";
import navReducer from "./nav/nav.reducer";
import userReducer from "./user/user.reducer";
import mapReducer from "./map/map.reducer";

const rootReducer = combineReducers({
  // it's like our state `cause every reducer return state
  nav: navReducer,
  task: taskReducer,
  user: userReducer,
  map: mapReducer
});

export default rootReducer;
