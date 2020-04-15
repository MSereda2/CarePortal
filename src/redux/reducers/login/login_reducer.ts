import {login_types} from './login_types';

const initialState = {
    currentUser: {},
    // userId: null,
}

let login_reducer = (state = initialState, action: any) => {
    switch(action.type) {
        case login_types.SET_USER:
            return {
                ...state,
                currentUser: {...action.payload},
            }

        default: return state;
    }
}

export default login_reducer;