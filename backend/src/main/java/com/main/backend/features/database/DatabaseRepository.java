package com.main.backend.features.database;

import com.main.backend.features.database.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DatabaseRepository extends JpaRepository<User, Integer> {
}
