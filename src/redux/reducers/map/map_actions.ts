import {map_types} from './map_types';

export type GetUserLocationType = {
    type: typeof map_types.GET_USER_LOCATION,
    lat: number,
    lng: number
}

export type GetLocationName = {
    type: typeof map_types.GET_LOCATION_NAME,
    name: string
}

export let getUserLocation = (lat: number, lng: number):GetUserLocationType  => ({
    type: map_types.GET_USER_LOCATION,
    lat: lat,
    lng: lng
})

export let getLocationName = (name: string):GetLocationName => ({
    type: map_types.GET_LOCATION_NAME,
    name: name
})