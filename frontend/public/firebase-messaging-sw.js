// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyA5tslS7oQoISqadZLaJjFBVB3fT7gKTEo",
    authDomain: "mobirat-4ccd0.firebaseapp.com",
    projectId: "mobirat-4ccd0",
    storageBucket: "mobirat-4ccd0.appspot.com",
    messagingSenderId: "325423153182",
    appId: "1:325423153182:web:8c460b48d32a90327eae0f",
    measurementId: "G-62FLVRQ5DP"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
