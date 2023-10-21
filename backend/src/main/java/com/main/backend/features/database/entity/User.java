package com.main.backend.features.database.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;

@Getter
@Entity
@Table(name="users")
public class User {
    private @Id @GeneratedValue Long userId;
    private String firstName, lastName;
}
