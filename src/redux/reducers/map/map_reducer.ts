import {map_types} from './map_types';
// Types

type InitialStateType = {
    userLocation: {lat: number | null, lng: number | null}
    streetName: string,
    searchRuquest: string,
    isLocationRemoved: boolean
}


const initialState: InitialStateType = {
    userLocation: {lat: null, lng: null},
    streetName: '',
    searchRuquest: '',
    isLocationRemoved: false
}

let map_reducer = (state = initialState, action: any): InitialStateType => {
    switch(action.type) {
        case map_types.GET_USER_LOCATION:
            return {
                ...state,
                userLocation: {lat:action.lat, lng: action.lng },
               
            }
        case map_types.GET_LOCATION_NAME:
            return {
                ...state,
                streetName: action.name
            }
        case map_types.GET_SEARCH_REQUEST:
            return {
                ...state,
                searchRuquest: action.latLng
            }
        case map_types.IS_REMOVED:
            return {
                ...state,
                isLocationRemoved: true
            }

        default: return state;
    }
}

export default map_reducer;