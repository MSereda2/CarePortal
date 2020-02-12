import TaskTypes from "./taskPage.types";

const INITIAL_STATE = {
  // taskUserName: "Наруто узумаки",
  taskContainer: {
    taskList: [
      {
        img: "https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg",
        id: 1,
        title: "Как развить харизму.",
        description: "Подробней",
        distance: "300м",
        timer: '18:00',
        radius: '30м',
        cost: "500",
      },
      {
        img: "https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg",
        id: 2,
        userName: "Тимур Саникидзе",
        title: "Как найти собаку.",
        description: "Подробней",
        distance: "300м",
        timer: '18:00',
        cost: "600",
        data: "25.01.2020",
      }
    ],
    taskOnMap: [
      {
        id: 1,
        name:" Приготовить печенье",
        coordinates: {
          lat: 45.039268,
          lng: 38.987221,
        },
      },
      {
        id: 2,
        name:"Найти жопу",
        coordinates: {
          lat: 45.039252,
          lng: 38.977156,
        },
      },
      {
        id: 3,
        name:"Выкопать кортошку",
        coordinates: {
          lat: 45.044589,
          lng: 38.961031,
        },
      },
      {
        id: 4,
        name:"найти ламу",
        coordinates: {
          lat: 45.039009,
          lng: 38.961031,
        },
      },
      {
        id: 5,
        name:"найти ламу",
        coordinates: {
          lat: 45.045316,
          lng: 38.989507,
        },
      },
      {
        id: 6,
        name:"найти ламу",
        coordinates: {
          lat: 45.006734,
          lng: 39.028961,
        },
      },
      {
        id: 7,
        name:"найти ламу",
        coordinates: {
          lat: 45.010618,
          lng: 39.038911,
        },
      },
      {
        id: 8,
        name:"найти ламу",
        coordinates: {
          lat: 45.005035,
          lng: 39.033764,
        },
      },
    ],
  },
  map: {
    mapPosition: {
		  lat: null,
		  lng: null
    },
    markerPosition: {
		  lat: null,
		  lng: null
    },
    userLocation: {
      latitude: 45.039268,
      longitude: 38.987221,
      userAddress: null
    }
  },
  popUp: {
    inputFields: {
        task: "",
        description: "",
        timer: "",
        adress: "",
        cost: ""
    },
    addTask: {
      name: 'Create Task',
      popUpOpen: true,
    },
    img: {
      img: '',
    }
  },
};

const taskReducer = (state = INITIAL_STATE, action) => {
  let inputFields = state.popUp.inputFields;
  switch(action.type) {

    case TaskTypes.ADD_TASK:
      if(inputFields.task,inputFields.description,inputFields.adress,inputFields.cost !== "") {
        console.log('work')
      } else {
        console.log('field form')
      }
      return state;
    case TaskTypes.CHANGE_TASK:
      inputFields.task = action.text;
      return {...state};
    case TaskTypes.CHANGE_DESCRIPTION:
      inputFields.description = action.text;
      return {...state}
    case TaskTypes.CHANGE_ADDRESS:
      inputFields.adress = action.text;
      return {...state}
    case TaskTypes.CHANGE_COST:
      inputFields.cost = action.text;
      return {...state}
    case TaskTypes.GET_USER_LOCATION:

        let getCoordinates = (position) => {
          state.map.userLocation.latitude = position.coords.latitude;
          state.map.userLocation.longitude = position.coords.longitude;
          console.log(state.map.userLocation.latitude)
        } 

        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getCoordinates);
        } else { alert('do')}

      return {...state}
  }

  return state;
};

export default taskReducer;









// switch (action.type) {
//   case TaskTypes.ADD_TASK:
//     if (state.inputs.task !== "") {
//       let newTask = {
//         img: "https://sun1-22.userapi.com/xqewco6YwoG3uNTiAI9tux7_I1hfwdV3OEMHfg/0D7twNiDFVA.jpg",
//         userName: 'Naruto Yuzymaki',
//         title: state.inputs.task,
//         description: state.inputs.description !== '' ? state.inputs.description : 'Подробней',
//         cost: state.inputs.cost,
//         data: "27.01.2020"
//       };
//       state.taskContainer.taskList.push(newTask);
//       state.inputs.task = "";
//       state.inputs.description = "";
//       state.inputs.address = "";
//       state.inputs.cost = "";
//     }
//     return {
//       ...state
//     };
//   case TaskTypes.CHANGE_TASK:
//     state.inputs.task = action.text;
//     return {
//       ...state
//     };
//   case TaskTypes.CHANGE_DESCRIPTION:
//     state.inputs.description = action.text;
//     return {
//       ...state
//     };
//   case TaskTypes.CHANGE_ADDRESS:
//     state.inputs.address = action.text;
//     return {
//       ...state
//     };
//   case TaskTypes.CHANGE_COST:
//     state.inputs.cost = action.text;
//     return {
//       ...state
//     };
