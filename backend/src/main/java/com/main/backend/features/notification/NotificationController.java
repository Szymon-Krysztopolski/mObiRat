package com.main.backend.features.notification;

import org.springframework.web.bind.annotation.*;

import java.util.Stack;

@RestController
@RequestMapping("/api")
public class NotificationController {
    private final Stack<String> notificationTable = new Stack<>();

    @GetMapping("/get-notification")
    public String getNotification() {
        return notificationTable.isEmpty() ? null : notificationTable.pop();
    }

    @PutMapping("/put-notification")
    public String testNotification(@RequestBody String newNotification) {
        notificationTable.add(newNotification);
        return String.format("Notification %s added to stack!", newNotification);
    }
}
