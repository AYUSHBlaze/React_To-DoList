import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCMcwxOhHN9V_1GAOZKCc5st8uDuD6rUXI",
    authDomain: "todo-app-9ca89.firebaseapp.com",
    projectId: "todo-app-9ca89",
    storageBucket: "todo-app-9ca89.appspot.com",
    messagingSenderId: "49073572259",
    appId: "1:49073572259:web:7edfb71dc3ede5c3997216"
  }
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase