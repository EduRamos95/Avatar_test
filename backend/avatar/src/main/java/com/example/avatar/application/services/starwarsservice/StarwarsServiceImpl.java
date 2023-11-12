package com.example.avatar.application.services.starwarsservice;

import com.example.avatar.domain.models.dto.FilmsDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Slf4j
@Service
public class StarwarsServiceImpl implements StarwarsService {

//    @Value("${api.starwars.base}")
//    private String urlStarWars;
//
//    @Value("${api.starwars.path.films}")
//    private String pathFilms;
//
//    @Value("${api.starwars.path.people}")
//    private String pathPeople;

    private  String url = "https://swapi.dev/api/films/";

    @Override
    public Mono<FilmsDto> getAllAplicaciones() {
        log.info("********************************");
//        log.info("URL Star Wars: {}", urlStarWars);
//        log.info("Path Films: {}", pathFilms);
//        log.info("Path People: {}", pathPeople);
        log.info("********************************");

        return WebClient.builder()
                .baseUrl(url)
                .build()
                .get()
                .retrieve()
                .bodyToMono(FilmsDto.class);

//        return WebClient.builder()
//                .baseUrl(urlStarWars + pathFilms + "/")
//                .build()
//                .get()
//                .retrieve()
//                .bodyToMono(FilmsDto.class);
    }
}
