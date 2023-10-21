// import {initializeApp} from "firebase/app";
// import {getMessaging, getToken, onMessage} from "firebase/messaging";
//
// const firebaseConfig = {
//     apiKey: "AIzaSyA5tslS7oQoISqadZLaJjFBVB3fT7gKTEo",
//     authDomain: "mobirat-4ccd0.firebaseapp.com",
//     projectId: "mobirat-4ccd0",
//     storageBucket: "mobirat-4ccd0.appspot.com",
//     messagingSenderId: "325423153182",
//     appId: "1:325423153182:web:8c460b48d32a90327eae0f",
//     measurementId: "G-62FLVRQ5DP"
// };
//
// const firebaseApp = initializeApp(firebaseConfig);
// const messaging = getMessaging(firebaseApp);
//
// function requestForToken() {
//     console.log("heere")
//     const messaging = getMessaging();
//     getToken(messaging, {vapidKey: 'BIcXjCoZbpMEAamGkuAcvdGnEtBo9Nro2d8Shser1ecqT-BkcgC_GPdJRtao5Np6_tC46a8NuKICxIRrOPHAchI'})
//         .then((currentToken) => {
//             if (currentToken) {
//             } else {
//                 console.log('No registration token available. Request permission to generate one.');
//             }
//         }).catch((err) => {
//         console.log('An error occurred while retrieving token. ', err);
//     });
// };
