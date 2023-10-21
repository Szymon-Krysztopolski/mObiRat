package com.main.backend.features.notification;

import com.google.firebase.messaging.FirebaseMessagingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping
public class FirebaseMessagingController {
    private final FirebaseMessagingService firebaseService;

    @Autowired
    public FirebaseMessagingController(FirebaseMessagingService firebaseService) {
        this.firebaseService = firebaseService;
    }

    @ResponseBody
    @PostMapping("/send-notification")
    public String sendNotification(@RequestBody FirebaseNote note, @RequestParam String topic) throws FirebaseMessagingException {
        log.info("sendNotification function");
        return firebaseService.sendNotification(note, topic);
    }
}
