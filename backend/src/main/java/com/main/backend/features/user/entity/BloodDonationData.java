package com.main.backend.features.user.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

import java.util.Date;

@Data
@Embeddable
public class BloodDonationData {
    private BloodGroup bloodGroup;
    private String facility;
    private Date donationDate;

    private boolean notificationPermission;
    private boolean notificationEmergencyDemand;
    private boolean notificationAvailability;
    private int notificationFrequency;
}
