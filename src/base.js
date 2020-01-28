import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // apiKey: "AIzaSyDXUCNSpi5u07F76httlCTXAA4mPVQlEHs",
  // authDomain: "catch-of-the-day-wes-bos-2.firebaseapp.com",
  // databaseURL: "https://catch-of-the-day-wes-bos-2.firebaseio.com"
  apiKey: "AIzaSyC6lFd3DT9ZBKcH0v1kETUsx6LtXpB4Q0E",
    authDomain: "fish-store-app.firebaseapp.com",
    databaseURL: "https://fish-store-app.firebaseio.com",
    projectId: "fish-store-app",
    storageBucket: "fish-store-app.appspot.com",
    messagingSenderId: "245069793583",
    appId: "1:245069793583:web:a1f7ccf6e2a8c44150b9da",
    measurementId: "G-78GT0Q5PM2"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
