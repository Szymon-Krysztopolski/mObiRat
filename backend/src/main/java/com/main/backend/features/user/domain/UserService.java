package com.main.backend.features.user.domain;

import com.main.backend.features.user.entity.BloodGroup;
import com.main.backend.features.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User getUser(Long id) {
        return repository.findById(id).orElseThrow(null);
    }

    public String createUser(Long fixedUserId, User user) {
        User newUser = User.builder()
                .userId(fixedUserId)
                .bloodGroup((user.getBloodGroup() == null ? BloodGroup.AB_RH_DODATNI : user.getBloodGroup()))
                .rckikCity((user.getRckikCity() == null ? "Poznan" : user.getRckikCity()))
                .donationDate(user.getDonationDate())
                .notificationPermission(user.isNotificationPermission())
                .notificationEmergencyDemand(user.isNotificationEmergencyDemand())
                .notificationAvailability(user.isNotificationAvailability())
                .notificationFrequency(user.getNotificationFrequency())
                .build();
        repository.saveAndFlush(newUser);

        return String.format("[%s] User's details updated!", user.getUserId());
    }

    public String deleteUser(Long id) {
        repository.deleteById(id);
        return String.format("[%d] User's details deleted!", id);
    }
}
