import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA2YVEpqOTfWZ0jEEBEoYiBHZah6gtMb2E",
  authDomain: "m-city-7ed75.firebaseapp.com",
  databaseURL: "https://m-city-7ed75.firebaseio.com",
  projectId: "m-city-7ed75",
  storageBucket: "m-city-7ed75.appspot.com",
  messagingSenderId: "803327050361"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
