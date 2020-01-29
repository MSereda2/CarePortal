let INITIAL_STATE = {
  logo: require("../../assets/logo.jpg"),
  logoName: "Unical",
  buttonCreate: "Create task",
  navNotice: {
    icon: "fa fa-bell"
  }
};

const navReducer = (state = INITIAL_STATE, action) => {
  return state;
};

export default navReducer;
