import {login_types} from './login_types';

export type SetUserACType = {
    type: typeof login_types.SET_USER;
    payload: SetUserPayloadType
}

export type SetUserPayloadType = {
    id: string
    createAt: {seconds: number, nanoseconds: number}
    displayName: string
    email: string
    phoneNumber: string
    photoURL: string,
}

export type ToggleFetchingType = {
    type: typeof login_types.TOGGLE_FETCHING,
    payload: boolean
}

export const setUserAC = (user: SetUserPayloadType): SetUserACType => ({
    type: login_types.SET_USER,
    payload: user
})

export const toggleFetching = (payload: boolean):ToggleFetchingType => ({
    type: login_types.TOGGLE_FETCHING,
    payload
})