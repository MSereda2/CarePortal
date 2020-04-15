// Types
import {InitialStateType} from './login_reducer';

export const getProfileImg = (state: any) => state.login.currentUser.photoURL;
export const getIsAuth = (state: any) => state.login.currentUser.id;