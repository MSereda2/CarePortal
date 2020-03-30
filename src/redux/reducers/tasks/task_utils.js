export let AddTask = (task, newTask, userData) => {
    // 1. add tasks to existing task array
    let taskId = 0;
    const taskItem = {
        id: taskId++,
        img: userData.currentUser.photoURL,
        nameUser: userData.currentUser.name,
        secondName: userData.currentUser.secondName,
        number: userData.currentUser.number,
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