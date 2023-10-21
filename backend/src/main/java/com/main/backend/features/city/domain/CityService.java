package com.main.backend.features.city.domain;

import com.main.backend.features.city.entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService {

    private final CityRepository repository;

    @Autowired
    public CityService(CityRepository repository) {
        this.repository = repository;
    }

    public City getCityByName(String name) {
        return repository.findById(name).orElseThrow(null);
    }

    public List<City> getAllCities() {
        return repository.findAll();
    }
}
