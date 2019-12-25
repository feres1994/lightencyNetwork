import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBsOQ8O3zQbC0uyB3DDA56bfF5jEUNKZGA',
  authDomain: 'lightency-db96b.firebaseapp.com',
  databaseURL: 'https://lightency-db96b.firebaseio.com',
  projectId: 'lightency-db96b',
  storageBucket: 'lightency-db96b.appspot.com',
  messagingSenderId: '1084722402092',
  appId: '1:1084722402092:web:495f84203227fd8607d289'
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
