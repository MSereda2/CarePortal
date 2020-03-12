import * as firebase from 'firebase'
let database;

// import task_module from '../backend/models/task_module';

export const init = () => {
    let config = {
        apiKey: "AIzaSyCFhZ-L6c4oARk3jeNzY52fNqpHT9Cq8Cc",
        authDomain: "careportal-1579193046993.firebaseapp.com",
        databaseURL: "https://careportal-1579193046993.firebaseio.com",
        projectId: "careportal-1579193046993",
        storageBucket: "careportal-1579193046993.appspot.com",
        messagingSenderId: "572269890522",
        appId: "1:572269890522:web:9bcc9822d9514259304ee3"
    }
    firebase.initializeApp(config)
    database = firebase.database()
}

export const getTaskDB = (taskID) => {
    return database.ref(`/${taskID}`).once('value')
}