import  * as firebase from 'firebase'

        // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB3x-B3CzbZ4nSk5XIHX1gT_KDu4J8S-Rk",
    authDomain: "diary-96ba4.firebaseapp.com",
    databaseURL: "https://diary-96ba4.firebaseio.com",
    projectId: "diary-96ba4",
    storageBucket: "",
    messagingSenderId: "627767683923",
    appId: "1:627767683923:web:80b5c94680c5ceb6"
};
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const database = firebase.database().ref('/notes');
