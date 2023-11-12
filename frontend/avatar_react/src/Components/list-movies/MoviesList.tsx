import { Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SnowmobileIcon from '@mui/icons-material/Snowmobile';
import AdbIcon from '@mui/icons-material/Adb';

import React, { useState, useEffect } from 'react';
import './MoviesList.css'
import { FilmDetailDto } from '../../Models/MsStarwars/Response/StarwarsControllerV1';

function MoviesList(film:FilmDetailDto) {
  const [selectedFilm, setSelectedFilm] = useState<boolean>(false);

  const handleCarddClick = () => {
    setSelectedFilm(!selectedFilm);
  }

  return (
  <>
    <Card className="Card_element" onClick={handleCarddClick} sx={{ minWidth: 275 }}>
      {selectedFilm ? 
        (
          <>
        <CardContent className='allContent'>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {film.release_date}
          </Typography>
          <Typography className='titleCard' variant="h5" component="div">
            {film.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Episode: {film.episode_id}
          </Typography>
          <Typography variant="body2">
            {film.opening_crawl}
          </Typography>
        </CardContent>
        <CardActions>
          <ButtonGroup id="btnGroup" variant="contained" aria-label="outlined button group">
            <Button variant="contained" color="error" startIcon={<PersonIcon />} size="small"><span>Characters</span></Button>
            <Button variant="contained" color="success" startIcon={<PublicIcon />} size="small"><span>Planets</span></Button>
            <Button variant="contained" color="primary" startIcon={<RocketLaunchIcon />} size="small"><span>Starships</span></Button>
            <Button variant="contained" color="secondary" startIcon={<SnowmobileIcon />} size="small"><span>Vehicles</span></Button>
            <Button variant="contained" color="error" startIcon={<AdbIcon />} size="small"><span>Species</span></Button>
          </ButtonGroup>
        </CardActions>
          </>
      ) : (
        <CardContent className='tittleContent'>
          <Typography className='titleCard' variant="h5" component="div">
            {film.title}
          </Typography>
        </CardContent>
      )
    }
    </Card>
      {/* <ul>
        {films.map((film) => (
          <li key={film.title}>
          {film.title}
          <button onClick={() => handleFilmClick(film.url)}>View Details</button>
          </li>
          ))}
          </ul>
        {selectedFilm && <MovieCard film={selectedFilm} />} */}
  </>
 )
}

export default MoviesList;