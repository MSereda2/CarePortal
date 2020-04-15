import {login_types} from './login_types';

export const setUserAC = (user: any) => ({
    type: login_types.SET_USER,
    payload: user
})