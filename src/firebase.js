import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBjxyAhs4N7pr1u-0sRU3wXlSoIcTtSSlw",
    authDomain: "cancio.firebaseapp.com",
    databaseURL: "https://cancio.firebaseio.com",
    projectId: "cancio",
    storageBucket: "cancio.appspot.com",
    messagingSenderId: "1015765474594",
    appId: "1:1015765474594:web:f76dc6b3cebba6050c997b",
    measurementId: "G-CELG2M1R1Z"
  };

  const db = firebase.initializeApp(firebaseConfig).firestore();

  export default db