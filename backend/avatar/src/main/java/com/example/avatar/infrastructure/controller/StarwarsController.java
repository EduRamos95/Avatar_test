package com.example.avatar.infrastructure.controller;

import com.example.avatar.application.services.starwarsservice.StarwarsService;
import com.example.avatar.domain.models.dto.CharacterDto;
import com.example.avatar.domain.models.dto.FilmsDto;
import com.example.avatar.domain.models.dto.PlanetDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/star-wars-api/v1")
public class StarwarsController {
    @Autowired
    private StarwarsService StarwarsServ;

    @GetMapping("/movies")
    public Mono<FilmsDto> listAllFilms() {
        return StarwarsServ.getAllAplicaciones();
    }

    @GetMapping("/character/{num_person}")
    public Mono<CharacterDto> characterDetail(@PathVariable Integer num_person) {
        return StarwarsServ.getCharacter(num_person);
    }

    @GetMapping("/planet/{num_planet}")
    public Mono<PlanetDto> planetDetail(@PathVariable Integer num_planet) {
        return StarwarsServ.getPlanet(num_planet);
    }

}
