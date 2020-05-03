import {app_types} from './app_type';
import {set_initializedType} from './app_typeTS'

export const set_initialized = ():set_initializedType => ({
    type: app_types.SET_INITILIZED,
})