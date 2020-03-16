import {login_types} from './login_types';

export const setUserAC = (user) => ({
    type: login_types.SET_USER,
    user
})