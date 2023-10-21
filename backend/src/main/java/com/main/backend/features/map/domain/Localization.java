package com.main.backend.features.map.domain;

import com.main.backend.features.map.entity.LocalizationEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Localization {
    private double x, y;
    private String name, site, phone, mail;
    private double distance;

    public static Localization from(LocalizationEntity entity) {
        return Localization.builder()
                .x(entity.getX())
                .y(entity.getY())
                .name(entity.getName())
                .site(entity.getSite())
                .phone(entity.getPhone())
                .mail(entity.getMail())
                .build();
    }
}
