var firebaseConfig = {
    apiKey: "AIzaSyDJBSSpn2GWF04CYK5aajEcPClwRuqxOi0",
    authDomain: "sis-geo.firebaseapp.com",
    projectId: "sis-geo",
    storageBucket: "sis-geo.appspot.com",
    messagingSenderId: "409501078421",
    appId: "1:409501078421:web:2fab08e4674b7c83f31c9c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();