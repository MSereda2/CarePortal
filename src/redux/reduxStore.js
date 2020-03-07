import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
// import logger from "redux-logger";

import rootReducer from "./rootReducer";

// const middleware = [];
// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware)) );

export default store;
