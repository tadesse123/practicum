import firebase from 'firebase'
const firebaseConfig = {
 apiKey: "AIzaSyBPxQBPElfHojnHjSRJv8D2wbDGZxV4dUA",
 authDomain: "blogapp-ef71e.firebaseapp.com",
 projectId: "blogapp-ef71e",
 storageBucket: "blogapp-ef71e.appspot.com",
 messagingSenderId: "936583054125",
 appId: "1:936583054125:web:f137276aed0e04e109c9a4"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;