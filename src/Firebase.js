import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAJs3xN7Y0HF2zImzi--wpXVNlKZ38UTwY",
    authDomain: "contactbook-6b957.firebaseapp.com",
    databaseURL: "https://contactbook-6b957-default-rtdb.firebaseio.com",
    projectId: "contactbook-6b957",
    storageBucket: "contactbook-6b957.appspot.com",
    messagingSenderId: "714491503737",
    appId: "1:714491503737:web:3ca48e4ba3c0d8e03f20a8"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  var db = firebase.initializeApp(firebaseConfig);

export default db.database().ref();