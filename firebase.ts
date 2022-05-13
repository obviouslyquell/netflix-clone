// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4nO486-5f5ymamcbenK9frR4eRFRFl-U",
    authDomain: "netflix-clone-7c5b2.firebaseapp.com",
    projectId: "netflix-clone-7c5b2",
    storageBucket: "netflix-clone-7c5b2.appspot.com",
    messagingSenderId: "18920003036",
    appId: "1:18920003036:web:356b19f8ed5db89ea6eb19",
    measurementId: "G-R2VKYN4V0M"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }