package com.main.backend.features.user.domain;

import com.main.backend.features.city.domain.CityService;
import com.main.backend.features.user.entity.BloodDonationData;
import com.main.backend.features.user.entity.User;
import com.main.backend.features.user.pojo.Details;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final Long fixedUserId = 749219421L;
    UserService userService;
    CityService cityService;

    @Autowired
    public UserController(UserService userService, CityService cityService) {
        this.userService = userService;
        this.cityService = cityService;
    }

    @PostMapping("/create")
    public String createUser(@RequestBody BloodDonationData bloodDonationData) {
        return userService.createUser(fixedUserId, bloodDonationData);
    }

    @DeleteMapping("/delete")
    public String deleteUser(Long userId) {
        return userService.deleteUser(userId);
    }

    @GetMapping("/test")
    public Details getUserData() {
        User user = userService.getUser(fixedUserId);
        Integer bloodDemands = cityService
                .getCityByName(user
                        .getBloodDonationData()
                        .getFacility()
                )
                .getBloodType()
                .mapBloodEnumToValue(user
                        .getBloodDonationData()
                        .getBloodGroup()
                );
        return new Details(user, bloodDemands);
    }
}
