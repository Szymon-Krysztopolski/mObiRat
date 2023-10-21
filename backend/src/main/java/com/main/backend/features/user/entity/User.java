package com.main.backend.features.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="users")
public class User {
    private @Id Long userId;

    private BloodGroup bloodGroup;
    private String rckikCity; // String -> Rckik @OneToOne
    private Date donationDate;

    private boolean notificationPermission;
    private boolean notificationEmergencyDemand;
    private boolean notificationAvailability;
    private Integer notificationFrequency;
}
