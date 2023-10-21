package com.main.backend.features.database.domain;

import com.main.backend.features.database.entity.City;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DatabaseService {
    private final UserRepository userRepository;
    private final CityRepository cityRepository;

    @Autowired
    public DatabaseService(UserRepository userRepository, CityRepository cityRepository) {
        this.userRepository = userRepository;
        this.cityRepository = cityRepository;
    }

    public City getCityByName(String name) {
        return cityRepository.findById(name).orElseThrow(null);
    }

    public List<City> getAllCities() {
        return cityRepository.findAll();
    }
}
