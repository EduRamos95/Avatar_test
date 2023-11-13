package com.example.avatar.application.services.starwarsservice;

import com.example.avatar.domain.models.dto.CharacterDto;
import com.example.avatar.domain.models.dto.FilmsDto;
import com.example.avatar.domain.models.dto.PlanetDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Slf4j
@Service
public class StarwarsServiceImpl implements StarwarsService {

    @Value("${api.starwars.base}")
    private String urlStarWars;

    @Value("${api.starwars.path.films}")
    private String pathFilms;

    @Value("${api.starwars.path.people}")
    private String pathPeople;

    @Value("${api.starwars.path.planets}")
    private String pathPlanet;

    @Override
    public Mono<FilmsDto> getAllAplicaciones() {
        log.info("********************************");
        log.info("URL Star Wars: {}", urlStarWars);
        log.info("Path Films: {}", pathFilms);
        log.info("********************************");

        return WebClient.builder()
                .baseUrl(urlStarWars + pathFilms + "/")
                .build()
                .get()
                .retrieve()
                .bodyToMono(FilmsDto.class);
    }

    @Override
    public Mono<CharacterDto> getCharacter(Integer numPerson) {
        log.info("********************************");
        log.info("URL Star Wars: {}", urlStarWars);
        log.info("Path People: {}", pathPeople);
        log.info("********************************");
        return WebClient.builder()
                .baseUrl(urlStarWars + pathPeople + "/" + numPerson.toString() + "/")
                .build()
                .get()
                .retrieve()
                .bodyToMono(CharacterDto.class);
    }

    @Override
    public Mono<PlanetDto> getPlanet(Integer numPlanet) {
        log.info("********************************");
        log.info("URL Star Wars: {}", urlStarWars);
        log.info("Path People: {}", pathPlanet);
        log.info("********************************");
        return WebClient.builder()
                .baseUrl(urlStarWars + pathPlanet + "/" + numPlanet.toString() + "/")
                .build()
                .get()
                .retrieve()
                .bodyToMono(PlanetDto.class);
    }
}
