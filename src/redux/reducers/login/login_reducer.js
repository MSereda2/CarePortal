import {login_types} from './login_types';

const initialState = {
    profileImg: require('../../../assets/Profileimg.jpg'),
    currentUser: null,
    isAuth: false
}

let login_reducer = (state = initialState, action) => {
    switch(action.type) {
        case login_types.SET_USER:
            return {
                ...state,
                currentUser: action.user,
                isAuth: true
            }

        default: return state;
    }
}

export default login_reducer;