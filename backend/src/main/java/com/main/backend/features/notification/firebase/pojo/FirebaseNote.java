package com.main.backend.features.notification.firebase.pojo;

import lombok.Data;

import java.util.Map;

@Data
public class FirebaseNote {
    private String subject;
    private String content;
    private Map<String, String> data;
//    private String image;
}
