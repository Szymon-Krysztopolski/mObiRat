package com.main.backend.features.user.domain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
public class UserController {
    UserService service;

    @Autowired
    public UserController(UserService service) {
        this.service = service;
    }
}
