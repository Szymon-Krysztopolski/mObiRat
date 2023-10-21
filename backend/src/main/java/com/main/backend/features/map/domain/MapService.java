package com.main.backend.features.map.domain;

import com.main.backend.features.map.entity.LocalizationEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class MapService {

    private final MapRepository repository;

    @Autowired
    public MapService(MapRepository repository) {
        this.repository = repository;
    }

    public List<Localization> calculateDistance(double x, double y) {
        List<LocalizationEntity> localizationEntities = repository.findAll();
        List<Localization> localizations = new ArrayList<>();

        for (LocalizationEntity localizationEntity : localizationEntities) {
            Localization localization = Localization.from(localizationEntity);

            double distance = calculateHaversineDistance(localization.getX(), localization.getY(), x, y);
            localization.setDistance(distance);
            localizations.add(localization);
        }
        localizations.sort(Comparator.comparingDouble(Localization::getDistance));

        return localizations.subList(0, 3);
    }

    private double calculateHaversineDistance(double lat1, double lon1, double lat2, double lon2) {
        // Haversine formula to calculate the distance between two coordinates
        double R = 6371; // Earth's radius in kilometers
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2)) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }
}
