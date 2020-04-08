
export let AddTask = (task, newTask, coordinates, userData, id) => {
    // 1. add tasks to existing task array
    let taskId = 0;
    const taskItem = {
        id: id,
        img: userData.photoURL,
        displayName: userData.displayName,
        phoneNumber: userData.phoneNumber,
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