import './App.css';
import React from 'react';
import {initializeApp} from "firebase/app";
import {getMessaging, getToken, onMessage} from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA5tslS7oQoISqadZLaJjFBVB3fT7gKTEo",
    authDomain: "mobirat-4ccd0.firebaseapp.com",
    projectId: "mobirat-4ccd0",
    storageBucket: "mobirat-4ccd0.appspot.com",
    messagingSenderId: "325423153182",
    appId: "1:325423153182:web:8c460b48d32a90327eae0f",
    measurementId: "G-62FLVRQ5DP"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export class App extends React.Component {
    componentDidMount() {
        requestForToken();
        onMessageListener();
    }

    render() {
        return (
            <div className="App">
                <div id='rectangle'>
                    <div id='jk'></div>
                    <div id='dokumenty-wszystkie'>
                        <div id='dokumenty'>Dokumenty</div>
                        <div id='dodaj'>Dodaj</div>
                        <div id='wszystkie'>Wszystkie</div>
                    </div>
                    <div id='dynamic-panel'>
                        <img src="normal_u25.svg" id='image'></img>
                    </div>
                    <div id='usługi-wszystkie'>
                        <div id='punkty karne'>
                            <div id='group'>

                            </div>
                            <div id='punkty-karne2'>
                                Punkty karne
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default App;

function requestForToken() {
    console.log("heere")
    const messaging = getMessaging();
    getToken(messaging, {vapidKey: 'BIcXjCoZbpMEAamGkuAcvdGnEtBo9Nro2d8Shser1ecqT-BkcgC_GPdJRtao5Np6_tC46a8NuKICxIRrOPHAchI'})
        .then((currentToken) => {
            if (currentToken) {
                console.log("good")
            } else {
                console.log('No registration token available. Request permission to generate one.');
            }
        }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}

function onMessageListener() {
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    })
}