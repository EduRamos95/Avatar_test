package com.example.avatar.application.services.starwarsservice;

import com.example.avatar.domain.models.dto.CharacterDto;
import com.example.avatar.domain.models.dto.FilmsDto;
import com.example.avatar.domain.models.dto.PlanetDto;
import reactor.core.publisher.Mono;

public interface StarwarsService {
    Mono<FilmsDto> getAllAplicaciones();
    Mono<CharacterDto> getCharacter(Integer numPerson);
    Mono<PlanetDto> getPlanet(Integer numPlanet);
}
