import { createStore,combineReducers } from "redux";

import nav from './reducers/nav.reducer';
import createTask from './reducers/createTask.reducer';
import profileUser from './reducers/profileUser.reducer';
import map from './reducers/Map.reducer';

let reducers = combineReducers({ // it's like our state `cause every reducer return state 
    nav,
    createTask,
    profileUser,
    map
})

let store = createStore(reducers);

export default store;