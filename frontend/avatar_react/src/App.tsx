import React, { useState, useEffect } from 'react';
import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import MoviesList from './Components/list-movies/MoviesList';
import { FilmDetailDto } from './Models/MsStarwars/Response/StarwarsControllerV1';


function App() {
  const [films, setFilms] = useState<FilmDetailDto[]>([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setFilms(data.results);
      setStatus(true);
    } catch (error) {
      console.error('Error fetching films:', error);
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  // const fetchFilmDetails = async (filmUrl) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(filmUrl);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const filmDetails = await response.json();
  //     setSelectedFilm(filmDetails);
  //     // Fetch details of characters in the film
  //     const charactersData = await Promise.all(
  //       filmDetails.characters.map(async (characterUrl) => {
  //         const characterResponse = await fetch(characterUrl);
  //         if (!characterResponse.ok) {
  //           throw new Error('Network response was not ok');
  //         }
  //         const characterData = await characterResponse.json();
  //         return characterData.name;
  //       })
  //     );
  //     setCharacters(charactersData);
  //   } catch (error) {
  //     console.error('Error fetching film details:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleButtonClick = () => {
    // Llamamos a la función para cargar los datos al hacer clic en el botón
    if (films.length > 0) return;
    fetchData();
  };

  return (
      <div className='ContainerPage'>
        <h1>Star Wars Films</h1>
        <button onClick={handleButtonClick}>
          {loading ? <CircularProgress size={20} style={{ marginRight: 10 }} /> : null}
          {loading ? 
            <span>Loading...</span> 
            : status ? 
              <span>Load Films</span> :
              <span>Search Films</span> 
          }
        </button>
        <div className='Cards'>
        { films.map((film, index) => 
          <MoviesList  key={index} {...film} />
          )
        }
        </div>
        {/* 
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <ul>
              {films.map((film) => (
                <li key={film.title}>
                  {film.title}
                  <button onClick={() => fetchFilmDetails(film.url)}>View Details</button>
                </li>
              ))}
            </ul>
            {selectedFilm && (
              <div>
                <h2>Film Details</h2>
                <p>Title: {selectedFilm.title}</p>
                <p>Episode ID: {selectedFilm.episode_id}</p>
                <p>Director: {selectedFilm.director}</p>
                <p>Producer: {selectedFilm.producer}</p>
                <p>Release Date: {selectedFilm.release_date}</p>
                <h3>Characters</h3>
                <ul>
                  {characters.map((character, index) => (
                    <li key={index}>{character}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      */}
      </div>
  );
}

export default App;


