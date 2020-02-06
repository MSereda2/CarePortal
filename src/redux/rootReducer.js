import { combineReducers } from "redux";

import headerReducer from "./header/header.reducer";
import taskPageReducer from "./taskPage/taskPage.reducer";

const rootReducer = combineReducers({
  // it's like our state `cause every reducer return state
  header: headerReducer,
  taskPage: taskPageReducer,
});

export default rootReducer;
