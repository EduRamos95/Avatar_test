package com.example.avatar.domain.models.dto;

import lombok.Getter;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FilmsDto {
    private int count;
    private String next;
    private String previous;
    private List<FilmDetailDto> results;
}
