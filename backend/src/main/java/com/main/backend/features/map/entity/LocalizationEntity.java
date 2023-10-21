package com.main.backend.features.map.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name = "localization")
public class LocalizationEntity {
    @Id
    @GeneratedValue
    private Long id;
    private double x, y;
    private String name, site, phone, mail;
}
