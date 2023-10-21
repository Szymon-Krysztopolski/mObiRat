package com.main.backend.features.map.domain;

import com.main.backend.features.map.entity.LocalizationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/map")
public class MapController {
    MapService service;

    @Autowired
    public MapController(MapService service) {
        this.service = service;
    }

    @GetMapping("/distance/{x}/{y}")
    public List<Localization> calculateDistance(@PathVariable double x, @PathVariable double y) {
        return service.calculateDistance(x, y);
    }
}
