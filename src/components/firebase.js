import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyDoNOGqI02Q6RTWsOQRgoEZCx8Qun5QVxY",
  authDomain: "auth-63e39.firebaseapp.com",
  projectId: "auth-63e39",
  storageBucket: "auth-63e39.appspot.com",
  messagingSenderId: "649566610400",
  appId: "1:649566610400:web:32cff0fbcd1ebaf7d78185",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export default db;
export { auth };
