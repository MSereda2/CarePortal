import {map_types} from './map_types';

const initialState = {
    userLocation: {lat: null, lng: null},
    streetName: ''
}

let map_reducer = (state = initialState, action) => {
    switch(action.type) {
        case map_types.GET_USER_LOCATION:
            return {
                ...state,
                userLocation: {lat:action.lat, lng: action.lng }
               
            }
        case map_types.GET_LOCATION_NAME:
            return {
                ...state,
                streetName: action.name
            }

        default: return state;
    }
}

export default map_reducer;