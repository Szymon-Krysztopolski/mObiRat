package com.main.backend.features.notification;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.FileInputStream;
import java.io.IOException;

public class FirebaseConnection {
    private void connection() throws IOException {
        FileInputStream serviceAccount = new FileInputStream("mobirat-4ccd0-firebase-adminsdk-zhog2-d9ce9ae0da.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        FirebaseApp.initializeApp(options);
    }
}
