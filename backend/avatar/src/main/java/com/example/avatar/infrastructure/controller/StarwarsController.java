package com.example.avatar.infrastructure.controller;

import com.example.avatar.application.services.starwarsservice.StarwarsService;
import com.example.avatar.domain.models.dto.FilmsDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/star-wars-api/v1")
public class StarwarsController {
    @Autowired
    private StarwarsService StarwarsServ;

    @GetMapping("/all")
    public Mono<FilmsDto> listAllFilms() {
        /*
        - cambiar tipo de dato
        - aplicar funcion
        -
        * */

        return StarwarsServ.getAllAplicaciones();
    }

}
