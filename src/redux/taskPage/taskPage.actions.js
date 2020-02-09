import TaskTypes from "./taskPage.types";
export const addTask = () => ({ type: TaskTypes.ADD_TASK });

export const changeTask = text => ({ type: TaskTypes.CHANGE_TASK, text: text });

export const changeDescription = text => ({
  type: TaskTypes.CHANGE_DESCRIPTION,
  text: text
});
export const changeAddress = text => ({
  type: TaskTypes.CHANGE_ADDRESS,
  text: text
});
export const changeCost = text => ({ type: TaskTypes.CHANGE_COST, text: text });
export const getUserLocation = () => ({type: TaskTypes.GET_USER_LOCATION});
