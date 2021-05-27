import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZyXfF28RcbZqpFSgjHSCld2iSwIp4zfA",
  authDomain: "clone-fully-responsive.firebaseapp.com",
  projectId: "clone-fully-responsive",
  storageBucket: "clone-fully-responsive.appspot.com",
  messagingSenderId: "748443151693",
  appId: "1:748443151693:web:3266b49960ba9eb3f15b04",
  measurementId: "G-CTWNQ02KJ9",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
