const initialState = {
    taskCounter: null,
    task: [
        {   
            img: '',
            title: '',
            description: '',
            distance: null,
            cost: null,
            time: null,
            btnStart: true,
            coordinates: {lat: null, lng: null}
        }
    ]
}

let task_reducer = (state = initialState, action) => {
    switch(action.type) {

        default: return state
    }
}

export default task_reducer;