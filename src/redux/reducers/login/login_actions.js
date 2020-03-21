import {login_types} from './login_types';

export const setUserAC = (data) => ({
    type: login_types.SET_USER,
    data
})