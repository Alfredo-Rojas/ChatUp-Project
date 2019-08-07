import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
  apiKey: "AIzaSyAjUpxxlnjjqAHusVMYsoUKDl3T2qdocCM",
  authDomain: "chatup-33160.firebaseapp.com",
  databaseURL: "https://chatup-33160.firebaseio.com",
  projectId: "chatup-33160",
  storageBucket: "chatup-33160.appspot.com",
  messagingSenderId: "234958989140",
  appId: "1:234958989140:web:bf2f49c42c31bdda"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;