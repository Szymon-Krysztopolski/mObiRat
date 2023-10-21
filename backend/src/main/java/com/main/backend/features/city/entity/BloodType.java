package com.main.backend.features.city.entity;

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
public class BloodType {
    private int ZERO_RH_UJEMNY;
    private int ZERO_RH_DODATNI;
    private int A_RH_UJEMNY;
    private int A_RH_DODATNI;
    private int B_RH_UJEMNY;
    private int B_RH_DODATNI;
    private int AB_RH_UJEMNY;
    private int AB_RH_DODATNI;
}