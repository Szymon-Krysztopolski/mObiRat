package com.main.backend.features.rckik.entity;

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
@Table(name = "rckik")
public class Rckik {
    @Id
    private String city;
    private String fullName, address, zipCodeCity, phone, website;
    private BloodDemands bloodDemands;

    public static Rckik getTestObject() {
        return Rckik.builder()
                .city("Bydgoszcz")
                .fullName("RCKiK w Bydgoszczy")
                .address("ul. Ks. Markwarta 8")
                .zipCodeCity("85-015 Bydgoszcz")
                .phone("tel. (52) 322 18 71 do 74")
                .website("www.rckik-bydgoszcz.com.pl")
                .bloodDemands(
                        BloodDemands.builder()
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
