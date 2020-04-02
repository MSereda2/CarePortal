export let AddTask = (task, newTask, userData) => {
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
        time: 1,
        btnStart: true,
        coordinates: {lat: 45.034249, lng: 38.985805},
        isShowModal: false
    }

    return [...task, {...taskItem}]
}