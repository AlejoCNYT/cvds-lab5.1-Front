package net.codejava.SpringBootHelloWorld;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SpringBootHelloWorldApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootHelloWorldApplication.class, args);
    }

    @CrossOrigin(origins = "http://localhost:3000") // Permitir solicitudes desde http://localhost:3000
    @RequestMapping("/")
    public String home() {
        return "<h1>Hello world Spring Boot</h1>";
    }

    @CrossOrigin(origins = "http://localhost:3000") // Permitir solicitudes desde http://localhost:3000
    @RequestMapping("/new")
    public String newEndpoint() {
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?><message>Welcome to the new endpoint!</message>";
    }
}
