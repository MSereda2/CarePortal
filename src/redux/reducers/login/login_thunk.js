// Firebase
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils';

// Actions
import {setUserAC} from '../login/login_actions';


let unSubscribeFromAuth = null;

export const subscribeFromAuth = () => {

    return async (dispatch) => {
        unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     
        if(userAuth) {
            const userRef = await createUserProfileDocument(userAuth);
      
            userRef.onSnapshot(snapShot => { dispatch(setUserAC(snapShot.id, snapShot.data()))  })
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