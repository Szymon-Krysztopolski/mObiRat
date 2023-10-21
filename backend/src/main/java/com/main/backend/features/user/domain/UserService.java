package com.main.backend.features.user.domain;

import com.main.backend.features.user.entity.BloodDonationData;
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

    public User getUser(Long userId) {
        return repository.findById(userId).orElseThrow();
    }

    public String createUser(Long userId, BloodDonationData bloodDonationData) {
        User user = User.builder()
                .userId(userId)
                .bloodDonationData(bloodDonationData)
                .build();
        repository.saveAndFlush(user);

        return String.format("[%s] User's options updated!", userId);
    }

    public String deleteUser(Long userId) {
        repository.deleteById(userId);
        return String.format("[%d] User's options deleted!", userId);
    }
}
