import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC95ycR8pJm5nC8zl8HGWsgJOOl5FutsqI",
    authDomain: "crwn-db-62a56.firebaseapp.com",
    projectId: "crwn-db-62a56",
    storageBucket: "crwn-db-62a56.appspot.com",
    messagingSenderId: "290904784166",
    appId: "1:290904784166:web:0447506a88f761ca2515e7",
    measurementId: "G-2E1C91YY26"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ propmt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;