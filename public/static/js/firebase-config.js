// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAirHnLBLnkQhNeT-Afs6dy7xxxMWGbXaU",
    authDomain: "chatbot-b9957.firebaseapp.com",
    databaseURL: "https://chatbot-b9957-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatbot-b9957",
    storageBucket: "chatbot-b9957.appspot.com",
    messagingSenderId: "667995042825",
    appId: "1:667995042825:web:ceda7ab2df5010677674d8",
    measurementId: "G-ZZ9RQXSXG8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Firebase db, auth
const db = firebase.database();
const auth = firebase.auth();