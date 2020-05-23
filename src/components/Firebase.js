import firebaseConfig from './firebase-config.json';

let firebaseInstance
export const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  }

  firebase.initializeApp(firebaseConfig)
  firebaseInstance = firebase

  return firebase
}