package com.main.backend.features.user.domain;

import com.main.backend.features.user.entity.BloodDonationData;
import com.main.backend.features.user.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final Long fixedUserId = 749219421L;
    private final UserRepository repository;

    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public User getUser() {
        return repository.findById(fixedUserId).orElseThrow();
    }

    public String createUser(BloodDonationData bloodDonationData) {
        User user = User.builder()
                .userId(fixedUserId)
                .bloodDonationData(bloodDonationData)
                .build();
        repository.saveAndFlush(user);

        return String.format("User %d created!", fixedUserId);
    }
}
