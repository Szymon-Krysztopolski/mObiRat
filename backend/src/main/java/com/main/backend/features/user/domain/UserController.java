package com.main.backend.features.user.domain;

import com.main.backend.features.rckik.domain.RckikService;
import com.main.backend.features.rckik.entity.BloodDemands;
import com.main.backend.features.rckik.entity.Rckik;
import com.main.backend.features.user.entity.BloodGroup;
import com.main.backend.features.user.entity.User;
import com.main.backend.features.user.pojo.UserPanel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.Date;

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

    @GetMapping(value = "/test", produces = "application/json;charset=utf-8")
    public User getTestUser() {
        return userService.getUser(fixedUserId);
    }

    @GetMapping("/userPanel")
    public UserPanel getBloodDemands() { // todo fix
        User user = userService.getUser(fixedUserId);

        String userRckik = (user.getRckikCity() == null ? "Poznań" : user.getRckikCity());
        Rckik rckik = rckikService.getRckikByName(userRckik);

        BloodDemands bloodDemands = (rckik.getBloodDemands() == null ? BloodDemands.exampleData() : rckik.getBloodDemands());
        BloodGroup bloodGroup = (user.getBloodGroup() == null ? BloodGroup.AB_RH_UJEMNY : user.getBloodGroup());
        Date userDate = (user.getDonationDate() == null ? Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()) : user.getDonationDate());

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(userDate);
        calendar.add(Calendar.WEEK_OF_YEAR, 12);
        Date newDate = calendar.getTime();


        return UserPanel.builder()
                .bloodGroup(user.getBloodGroup())
                .rckikFullName(rckik.getFullName())
                .rckikCity(rckik.getCity())
                .personalBloodDemands(bloodDemands.checkBloodDemands(bloodGroup))
                .donationDate(newDate)
                .notificationPermission(user.isNotificationPermission())
                .notificationEmergencyDemand(user.isNotificationEmergencyDemand())
                .notificationFrequency(user.getNotificationFrequency())
                .notificationAvailability(user.isNotificationAvailability())
                .build();
    }
}
