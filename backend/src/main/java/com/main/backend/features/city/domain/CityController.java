package com.main.backend.features.city.domain;

import com.main.backend.features.city.entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/city")
public class CityController {
    CityService service;

    @Autowired
    public CityController(CityService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public City test() {
        return City.getTestObject();
    }

    @GetMapping("/all")
    public List<City> getAllCities() {
        return service.getAllCities();
    }

    @GetMapping("/{name}")
    public City getCityByName(@PathVariable String name) {
        return service.getCityByName(name);
    }
}
