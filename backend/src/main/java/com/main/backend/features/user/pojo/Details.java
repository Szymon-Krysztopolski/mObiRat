package com.main.backend.features.user.pojo;

import com.main.backend.features.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Details {
    private User user;
    private Integer bloodDemands;
}
