package com.main.backend.features.database.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cities")
public class City {
    @Id
    private String name;
    private String rckik, address, zipCodeCity, phone, website;
    private BloodType bloodType;

    public static City getTestObject() {
        return City.builder()
                .name("Poznan")
                .rckik("RCkiK w Poznaniu")
                .bloodType(
                        BloodType.builder()
                                .ZERO_RH_UJEMNY(1)
                                .ZERO_RH_DODATNI(2)
                                .A_RH_UJEMNY(3)
                                .A_RH_DODATNI(4)
                                .B_RH_UJEMNY(5)
                                .B_RH_DODATNI(4)
                                .AB_RH_UJEMNY(3)
                                .AB_RH_DODATNI(2)
                                .build())
                .build();
    }
}
