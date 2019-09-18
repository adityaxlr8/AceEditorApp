import * as firebase from 'firebase';



  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAQcof3Iw884fKJpCoyYmIedS6ZlGb1XF0",
    authDomain: "googlleee-docs.firebaseapp.com",
    databaseURL: "https://googlleee-docs.firebaseio.com",
    projectId: "googlleee-docs",
    storageBucket: "",
    messagingSenderId: "213350831526"
  };
  firebase.initializeApp(firebaseConfig)
  const database = firebase.database()



export {firebase,database as default};