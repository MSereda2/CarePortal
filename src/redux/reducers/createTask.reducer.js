const initialState = {
        taskUserName: 'Наруто узумаки',
        taskUserImg: 'https://img5.goodfon.ru/wallpaper/nbig/7/bd/naruto-uzumaki-naruto-paren-sila.jpg',
        modalWindow: {
            name: 'Create task',
            inputs: [
                {
                  placeholder: 'Task name',
                  id: 1,
                  labelName: 'Task name',
                  task: '',
                },
                {
                    placeholder: 'Describe task',
                    id: 2,
                    labelName: 'describe task',
                    description: '',
                },
                {
                    placeholder: 'your adress',
                    id: 3,
                    labelName: 'adress',
                    adress: '',
                },
                {
                    placeholder: 'cost',
                    id: 4,
                    labelName: 'cost',
                    cost: '',
                },
            ]
        },
        taskContainer: {
            taskItem: [
                {
                    img: 'https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg',
                    userName: "Тимур Саникидзе",
                    title: 'Как развить харизму.',
                    moreInfo: 'Подробней',
                    cost: '500',
                    data: '25.01.2020'
                },
                
            ],
        },
    }

const createTask = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TASK":
            if(state.modalWindow.inputs[0].task !== '') {
                let newTask = {
                    moreInfo: 'Подробней',
                    img: state.taskUserImg,
                    userName: state.taskUserName,
                    title: state.modalWindow.inputs[0].task,
                    cost:  state.modalWindow.inputs[3].cost,
                    data: '27.01.2020'
               };
               state.taskContainer.taskItem.push(newTask);
               state.modalWindow.inputs[0].task = '';
               state.modalWindow.inputs[1].description = '';
               state.modalWindow.inputs[2].adress = '';
               state.modalWindow.inputs[3].cost = '';        
            }
            return state;
        case "CHANGE_TASK":
            state.modalWindow.inputs[0].task = action.text;
            return state;
        case  "CHANGE_DESCRIPTION":
            state.modalWindow.inputs[1].description = action.text;
            return state;
        case "CHANGE_ADRESS":
            state.modalWindow.inputs[2].adress = action.text;
            return state;
        case "CHANGE_COST":
            state.modalWindow.inputs[3].cost = action.text;
            return state;
            
        default: return state
    }

}

export default createTask;