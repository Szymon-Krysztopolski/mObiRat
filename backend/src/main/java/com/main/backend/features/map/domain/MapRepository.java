package com.main.backend.features.map.domain;

import com.main.backend.features.map.entity.LocalizationEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepository extends JpaRepository<LocalizationEntity, Long> {
}
