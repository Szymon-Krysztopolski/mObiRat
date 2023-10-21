package com.main.backend.features.database.domain;

import com.main.backend.features.database.pojo.BloodTypeData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DatabaseController {
    DatabaseService service;

    @Autowired
    public DatabaseController(DatabaseService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public BloodTypeData test() {
        return BloodTypeData.getTestObject();
    }
}
