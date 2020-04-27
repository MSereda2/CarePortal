import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCFhZ-L6c4oARk3jeNzY52fNqpHT9Cq8Cc",
    authDomain: "careportal-1579193046993.firebaseapp.com",
    databaseURL: "https://careportal-1579193046993.firebaseio.com",
    projectId: "careportal-1579193046993",
    storageBucket: "careportal-1579193046993.appspot.com",
    messagingSenderId: "572269890522",
    appId: "1:572269890522:web:9bcc9822d9514259304ee3"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef  = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email, photoURL, phoneNumber } = userAuth;
        const createAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                photoURL,
                phoneNumber,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

export const createTaskDocument = async (taskData, coordinates, currentUser, id) => {
    const taskRef = firestore.doc(`tasks/${id}`);
    const snapShot = await taskRef.get();

    if(!snapShot.exists) {
        const {title, description, cost, time} = taskData;
        const {photoURL, displayName, phoneNumber} = currentUser;
        const createAt = new Date();
        try {
            await taskRef.set({
                id,
                title,
                description,
                cost,
                time,
                photoURL,
                coordinates,
                displayName,
                phoneNumber,
                createAt
            })
        } catch(error) {
            console.log(`erro ${error}`)
        }
    }

    return taskRef;
}

export const convertCollectionSnapShottoMap = async (collections) => {
    const transformedColection = collections.docs.map(doc => {
        const data = doc.data()
        return {
            ...data
        }
    })
    return transformedColection
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
