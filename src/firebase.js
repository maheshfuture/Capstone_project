import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMwMJpVh_vJfl-8pGRstc60iCc2YBQEwU",
  authDomain: "campusconnect-175e2.firebaseapp.com",
  projectId: "campusconnect-175e2",
  storageBucket: "campusconnect-175e2.appspot.com",
  messagingSenderId: "168438492922",
  appId: "1:168438492922:web:600b2220a17b7297b92343",
  measurementId: "G-02D4R8GJ4Z"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 