import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAPM0URFjA5JR23PBi8ZiEaQGEk4lSxsfs",
    authDomain: "kumar-harsh.firebaseapp.com",
    databaseURL: "https://kumar-harsh.firebaseio.com",
    projectId: "kumar-harsh",
    storageBucket: "kumar-harsh.appspot.com",
    messagingSenderId: "217384912675",
    appId: "1:217384912675:web:f6851f7f977ba9dc6f6e96",
    measurementId: "G-KS49X2L1SL"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
