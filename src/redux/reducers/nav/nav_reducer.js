const initialState = {
    logoImg: require('../../../assets/logo.jpg'),
    links: [
        {
            name: 'Главная',
            id: 1,
        },
        {
            name: 'Продвинутый',
            id: 2,
        }, 
        {
            name: 'Помощь',
            id: 3,
        }, 
        {
            name: 'Об компании',
            id: 4,
        }
    ],
}

let nav_reducer = (state = initialState, action) => {
    switch(action.type) {

        default: return state
    }
}

export default nav_reducer;