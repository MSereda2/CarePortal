import {map_types} from './map_types';

export let getUser = (lat,lng) => ({
    type: map_types.GET_USER_LOCATION,
    lat,
    lng
})