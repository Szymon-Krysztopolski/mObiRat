package com.main.backend.features.user.domain;

import com.main.backend.features.rckik.domain.RckikService;
import com.main.backend.features.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final Long fixedUserId = 749219421L;
    UserService userService;
    RckikService rckikService;

    @Autowired
    public UserController(UserService userService, RckikService rckikService) {
        this.userService = userService;
        this.rckikService = rckikService;
    }

    @PostMapping("/create")
    public String createUser(@RequestBody User user) {
        return userService.createUser(fixedUserId, user);
    }

    @DeleteMapping("/delete")
    public String deleteUser() {
        return userService.deleteUser(fixedUserId);
    }

    @GetMapping("/test")
    public User getTestUser() {
        return userService.getUser(fixedUserId);
    }

    @GetMapping("/bloodDemands")
    public Integer getBloodDemands() { // todo fix
        User user = userService.getUser(fixedUserId);

        Integer bloodDemands = null;
        try {
            bloodDemands = rckikService
                    .getRckikByName(user.getRckikCity())
                    .getBloodDemands()
                    .checkBloodDemands(user.getBloodGroup());
        } catch (Exception ignored) {}

        return bloodDemands;
    }
}
