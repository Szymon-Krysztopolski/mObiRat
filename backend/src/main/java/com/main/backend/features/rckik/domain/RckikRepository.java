package com.main.backend.features.rckik.domain;

import com.main.backend.features.rckik.entity.Rckik;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RckikRepository extends JpaRepository<Rckik, String> {
}
