import {signUp_types} from './signUp_types';

const initialState = {
   name: '',
   email: '',
   phoneNumber: null,
   password: '',
   confirmPassword: ''
}

let signUp_reducer = (state = initialState, action) => {
    switch(action.type) {

        default: return state;
    }
}

export default signUp_reducer;