package com.main.backend.features.rckik.domain;

import com.main.backend.features.rckik.entity.Rckik;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rckik")
public class RckikController {
    RckikService service;

    @Autowired
    public RckikController(RckikService service) {
        this.service = service;
    }

    @GetMapping("/test")
    public Rckik test() {
        return Rckik.getTestObject();
    }

    @GetMapping("/all")
    public List<Rckik> getAllRckik() {
        return service.getAllRckik();
    }

    @GetMapping("/{name}")
    public Rckik getRckikByName(@PathVariable String name) {
        return service.getRckikByName(name);
    }
}
