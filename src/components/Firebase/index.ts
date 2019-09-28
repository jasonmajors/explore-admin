import firebase from "firebase";
// Add additional services that you want to use
// require("firebase/auth");
// require("firebase/database");
// const firebase = require("firebase");
require("firebase/firestore");


var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_APP_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};

firebase.initializeApp(config);

export const db = firebase.firestore();
