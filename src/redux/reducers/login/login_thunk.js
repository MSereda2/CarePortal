// Firebase
import { auth, createUserProfileDocument } from '../../../api/firebase/firebase.utils';

// Actions
import {setUserAC} from '../login/login_actions';


let unSubscribeFromAuth = null;

export const subscribeFromAuth = () => {

    return async (dispatch) => {
        unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
        if(userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
      
            userRef.onSnapshot(snapShot => { dispatch(setUserAC({
                id: snapShot.id,
                ...snapShot.data()
            }))  })
        } else {
           dispatch(setUserAC(userAuth))
        }
              
          })
    }
}

export const unsubscribeFromAuth = () => {

    return async (dispatch) => {
        unSubscribeFromAuth()
    }
}

export const signUpThunk = (formData) => {

    return async (dispatch) => {
        let {name, secondName, email, password, passwordConfirm, phoneNumber} = formData;
        let displayName = `${name}  ${secondName}`;
        let photoURL = require('../../../assets/userEmpty.png');

        if(password !== passwordConfirm) {
            alert('password does not match')
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            createUserProfileDocument(user, {displayName, phoneNumber, photoURL});

        } catch(error) {
            console.error(error)
        }
    }
}

export const signInThunk = (formData) => {

    return async (dispatch) => {
        const {email, password} = formData;

        try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch(error) {
            alert(error)
        }
    }
}