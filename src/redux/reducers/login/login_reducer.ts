import {login_types} from './login_types';
// Types
import {SetUserACType, SetUserPayloadType} from './login_actions';

export type InitialStateType = typeof initialState;



const initialState = {
    currentUser: {} as SetUserPayloadType
}


let login_reducer = (state = initialState, action: SetUserACType): InitialStateType => {
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