import PlacesAutocomplete, {  geocodeByAddress,  getLatLng, } from 'react-places-autocomplete';


export let AddTask = (task, newTask, coordinates, userData) => {
    // 1. add tasks to existing task array
    let taskId = 0;
    const taskItem = {
        id: taskId++,
        img: userData.currentUser.photoURL,
        displayName: userData.currentUser.displayName,
        phoneNumber: userData.currentUser.phoneNumber,
        title: newTask.title,
        description: newTask.description,
        cost: newTask.cost,
        time: newTask.time,
        btnStart: true,
        coordinates: coordinates,
        isShowModal: false
    }

    return [...task, {...taskItem}]
}