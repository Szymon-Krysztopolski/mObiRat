package com.main.backend.features.user.domain;

import com.main.backend.features.user.entity.BloodDonationData;
import com.main.backend.features.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping("/create")
    public String createUser(@RequestBody BloodDonationData bloodDonationData) {
        return service.createUser(bloodDonationData);
    }

    @DeleteMapping("/delete")
    public String deleteUser() {
        return service.deleteUser();
    }

    @GetMapping("/test")
    public User getTestUser() {
        return service.getUser();
    }
}
