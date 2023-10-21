package com.main.backend.features.notification;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/get-notification")
    public String testNotification() {
        return "test";
    }
}
