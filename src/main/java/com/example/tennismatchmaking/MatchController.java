package com.example.tennismatchmaking;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MatchController {
    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from Tennis Matchmaking Service";
    }
}
