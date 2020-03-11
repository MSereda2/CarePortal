import {map_types} from './map_types';

const initialState = {
    userLocation: {lat: null, lng: null}
}

let map_reducer = (state = initialState, action) => {
    switch(action.type) {
        case map_types.GET_USER_LOCATION:
            return {
                ...state,
                userLocation: {lat:action.lat, lng: action.lng }
               
            }

        default: return state;
    }
}

export default map_reducer;