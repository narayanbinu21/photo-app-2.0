import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBloIdvNkNImY50D3CSfqNCxCvvUONYPks",
  authDomain: "photo-app-3c0a2.firebaseapp.com",
  projectId: "photo-app-3c0a2",
  storageBucket: "photo-app-3c0a2.appspot.com",
  messagingSenderId: "730463136083",
  appId: "1:730463136083:web:3a9db36df333282c0f19a6"
};


firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };