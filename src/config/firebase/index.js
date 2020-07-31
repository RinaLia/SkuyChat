import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAveIH43hhdsNUY47ESGMef_Eh9K7Wj4Tk',
  authDomain: 'skuychat-16cf2.firebaseapp.com',
  databaseURL: 'https://skuychat-16cf2.firebaseio.com',
  projectId: 'skuychat-16cf2',
  storageBucket: 'skuychat-16cf2.appspot.com',
  messagingSenderId: '631485800129',
  appId: '1:631485800129:web:8404e63bb9d02a6db3fe40',
  measurementId: 'G-7W03RF7PC6',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
