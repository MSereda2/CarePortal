import TaskTypes from "./task.types";
const INITIAL_STATE = {
  taskUserName: "Наруто узумаки",
  taskUserImg:
    "https://img5.goodfon.ru/wallpaper/nbig/7/bd/naruto-uzumaki-naruto-paren-sila.jpg",
  inputs: {
    task: "",
    description: "",
    address: "",
    cost: ""
  },
  taskContainer: {
    taskItem: [
      {
        img:
          "https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg",
        userName: "Тимур Саникидзе",
        title: "Как развить харизму.",
        moreInfo: "Подробней",
        cost: "500",
        data: "25.01.2020"
      }
    ]
  }
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TaskTypes.ADD_TASK:
      console.log(state.inputs);
      if (state.inputs.task !== "") {
        let newTask = {
          // moreInfo: "Подробней",
          img: state.taskUserImg,
          userName: state.taskUserName,
          title: state.inputs.task,
          moreInfo: state.inputs.description
            ? state.inputs.description
            : "Подробней",
          cost: state.inputs.cost,
          data: "27.01.2020"
        };
        state.taskContainer.taskItem.push(newTask);
        state.inputs.task = "";
        state.inputs.description = "";
        state.inputs.address = "";
        state.inputs.cost = "";
      }
      return {
        ...state
      };
    case TaskTypes.CHANGE_TASK:
      state.inputs.task = action.text;
      return {
        ...state
      };
    case TaskTypes.CHANGE_DESCRIPTION:
      state.inputs.description = action.text;
      return {
        ...state
      };
    case TaskTypes.CHANGE_ADDRESS:
      state.inputs.address = action.text;
      return {
        ...state
      };
    case TaskTypes.CHANGE_COST:
      state.inputs.cost = action.text;
      return {
        ...state
      };

    default:
      return state;
  }
};

export default taskReducer;
