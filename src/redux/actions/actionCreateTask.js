let action = { 
    addTaskAction: () => (
        {type: "ADD_TASK"}
    ),
    changeTaskAction: (text) => (
        {type: "CHANGE_TASK", text: text}
    ),
    changeDescriptionAction: (text) => (
        {type: "CHANGE_DESCRIPTION", text: text}
    ),
    changeAdressAction: (text) => (
        {type: "CHANGE_ADRESS", text: text}
    ),
    changeCostAction: (text) => (
        {type: "CHANGE_COST", text: text}
    ),

}

export default action;

