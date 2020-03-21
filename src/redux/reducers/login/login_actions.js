import {login_types} from './login_types';

export const setUserAC = (id, otherData) => ({
    type: login_types.SET_USER,
    id,
    otherData
})