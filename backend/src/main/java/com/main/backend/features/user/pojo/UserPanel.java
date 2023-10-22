package com.main.backend.features.user.pojo;

import com.main.backend.features.user.entity.BloodGroup;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserPanel {
    private BloodGroup bloodGroup;
    private String rckikFullName;
    private String rckikCity;
    private Date donationDate;
    private Integer personalBloodDemands;

    private boolean notificationPermission;
    private boolean notificationEmergencyDemand;
    private boolean notificationAvailability;
    private Integer notificationFrequency;
}
