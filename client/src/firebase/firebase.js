import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration
var config = {
  apiKey: "AIzaSyDbX869774z70nCO0tq_S2JRqLV_1118KM",
  authDomain: "bazaar-260d7.firebaseapp.com",
  databaseURL: "https://bazaar-260d7.firebaseio.com",
  projectId: "bazaar-260d7",
  storageBucket: "bazaar-260d7.appspot.com",
  messagingSenderId: "188721019857"
};

// initialize Firebase, if Firebase isn’t already initialized, with the configuration object.
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// initialize and export the auth object
const auth = firebase.auth();

export {
  auth,
};