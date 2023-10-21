package com.main.backend.features.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class BloodDonationData {
    @Id
    private Long id;

    private String bloodGroup;
    private String facility;
    private Date donationDate;

    private boolean notificationPermission;
    private boolean notificationEmergencyDemand;
    private boolean notificationAvailability;
    private int notificationFrequency;
}
