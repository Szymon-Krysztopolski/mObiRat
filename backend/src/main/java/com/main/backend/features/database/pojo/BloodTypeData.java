package com.main.backend.features.database.pojo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BloodTypeData {
    private String RCKiK;
    private int ZERO_RH_UJEMNY;
    private int ZERO_RH_DODATNI;
    private int A_RH_UJEMNY;
    private int A_RH_DODATNI;
    private int B_RH_UJEMNY;
    private int B_RH_DODATNI;
    private int AB_RH_UJEMNY;
    private int AB_RH_DODATNI;

    public static BloodTypeData getTestObject() {
        return BloodTypeData.builder()
                .RCKiK("RCKiK w Poznaniu")
                .ZERO_RH_UJEMNY(1)
                .ZERO_RH_DODATNI(2)
                .A_RH_UJEMNY(3)
                .A_RH_DODATNI(4)
                .B_RH_UJEMNY(5)
                .B_RH_DODATNI(4)
                .AB_RH_UJEMNY(3)
                .AB_RH_DODATNI(2)
                .build();
    }
}