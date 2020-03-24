import {map_types} from './map_types';

export let getUser = (lat,lng) => ({
    type: map_types.GET_USER_LOCATION,
    lat,
    lng
})

export let getLocationName = (name) => ({
    type: map_types.GET_LOCATION_NAME,
    name
})