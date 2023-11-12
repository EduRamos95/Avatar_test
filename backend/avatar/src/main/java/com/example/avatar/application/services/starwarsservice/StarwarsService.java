package com.example.avatar.application.services.starwarsservice;

import com.example.avatar.domain.models.dto.FilmsDto;
import reactor.core.publisher.Mono;

public interface StarwarsService {
    Mono<FilmsDto> getAllAplicaciones();
}
