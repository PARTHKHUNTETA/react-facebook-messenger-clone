import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyDOTXNWrML0d6mu4L2cN4_KgYmoAFxlVvA",
    authDomain: "facebook-messenger-clone-6afe0.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-6afe0.firebaseio.com",
    projectId: "facebook-messenger-clone-6afe0",
    storageBucket: "facebook-messenger-clone-6afe0.appspot.com",
    messagingSenderId: "107557977702",
    appId: "1:107557977702:web:7c28588892cee9a10937a7",
    measurementId: "G-SJLJEYF6M5"

});

const db = firebaseApp.firestore();
export default db;