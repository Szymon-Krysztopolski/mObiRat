package com.main.backend.features.rckik.domain;

import com.main.backend.features.rckik.entity.Rckik;
import lombok.extern.log4j.Log4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Log4j
@Service
public class RckikService {

    private final RckikRepository repository;

    @Autowired
    public RckikService(RckikRepository repository) {
        this.repository = repository;
    }

    public Rckik getRckikByName(String name) {
        return repository.findById(name).orElseGet(() -> {
            System.out.println("Name to check: "+name);
            return Rckik.getTestObject();
        });
    }

    public List<Rckik> getAllRckik() {
        return repository.findAll();
    }
}
