package com.main.backend.features.rckik.entity;

import com.main.backend.features.user.entity.BloodGroup;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class BloodDemands {
    private int ZERO_RH_UJEMNY;
    private int ZERO_RH_DODATNI;
    private int A_RH_UJEMNY;
    private int A_RH_DODATNI;
    private int B_RH_UJEMNY;
    private int B_RH_DODATNI;
    private int AB_RH_UJEMNY;
    private int AB_RH_DODATNI;

    public int checkBloodDemands(BloodGroup bloodGroup) {
        int value = 0;
        switch (bloodGroup) {
            case ZERO_RH_UJEMNY -> value = ZERO_RH_UJEMNY;
            case ZERO_RH_DODATNI -> value = ZERO_RH_DODATNI;
            case A_RH_UJEMNY -> value = A_RH_UJEMNY;
            case A_RH_DODATNI -> value = A_RH_DODATNI;
            case B_RH_UJEMNY -> value = B_RH_UJEMNY;
            case B_RH_DODATNI -> value = B_RH_DODATNI;
            case AB_RH_UJEMNY -> value = AB_RH_UJEMNY;
            case AB_RH_DODATNI -> value = AB_RH_DODATNI;
        }

        return value;
    }
}