const initialState = {
    logoImg: require('../../../assets/logo.jpg'),
    links: [
        {   
            to: '/',
            name: 'Главная',
            id: 1,
        },
        {   

            to: '/advanced',
            name: 'Продвинутый',
            id: 2,
        }, 
        {   
            to: '/help',
            name: 'Помощь',
            id: 3,
        }, 
        {   
            to: '/aboutus',
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