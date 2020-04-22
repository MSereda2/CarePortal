import {PROFILE__TYPES} from './profile_types';

export const ChangeInfo = (payload: boolean) => ({
  type: PROFILE__TYPES.CHANGE__INFO,
  payload: payload
})