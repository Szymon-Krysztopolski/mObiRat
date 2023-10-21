package com.main.backend.features.user.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

import java.util.Date;

@Getter
@Entity
@Table(name="users")
public class User {
    private @Id @GeneratedValue Long userId;
    private String cityName;
    private Date date;
}
