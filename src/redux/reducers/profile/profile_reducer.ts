import {PROFILE__TYPES} from './profile_types';

export type InitialStateType = {
  profileInfo: {
    isChangeAllowed: boolean,
  }
}

const INITIAL__STATE: InitialStateType = {
  profileInfo: {
    isChangeAllowed: false
  }
}

const ProfileReducer = (state = INITIAL__STATE, action: any):InitialStateType => {
  switch(action.type) {
    case PROFILE__TYPES.CHANGE__INFO:
      return {
        ...state,
        profileInfo: {
          ...state.profileInfo,
          isChangeAllowed: action.payload
        }
      }

    default: return state;
  }
}

export default ProfileReducer;