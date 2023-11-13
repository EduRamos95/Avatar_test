import { Button, ButtonGroup, Card, CardActions, CardContent, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PublicIcon from '@mui/icons-material/Public';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SnowmobileIcon from '@mui/icons-material/Snowmobile';
import AdbIcon from '@mui/icons-material/Adb';

import React, { useState, useEffect } from 'react';
import './MoviesList.css'
import { FilmDetailDto } from '../../models/MsStarwars/Response/StarwarsControllerV1';
import CharacterList from '../list-character/CharacterList';
import PlanetList from '../list-planets/PlanetList';

function MoviesList(film:FilmDetailDto) {
  const [selectedFilm, setSelectedFilm] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>('');

  const handleCarddClick = () => {
    setSelectedFilm(!selectedFilm);
  }

  const detailsClick = (detail:string) => {
    setActiveButton(detail);
  }


  return (
    <Card className="Card_element" sx={{ minWidth: 275 }}>
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
            <Button onClick={() => detailsClick("characters")} variant="contained" color="error" startIcon={<PersonIcon />} size="small"><span className='opcion'>Characters</span></Button>
            <Button onClick={() => detailsClick("planets")} variant="contained" color="success" startIcon={<PublicIcon />} size="small"><span className='opcion'>Planets</span></Button>
            <Button onClick={() => detailsClick("nada")} variant="contained" color="primary" startIcon={<RocketLaunchIcon />} size="small"><span className='opcion'>Starships</span></Button>
            <Button onClick={() => detailsClick("nada")} variant="contained" color="secondary" startIcon={<SnowmobileIcon />} size="small"><span className='opcion'>Vehicles</span></Button>
            <Button onClick={() => detailsClick("nada")} variant="contained" color="warning" startIcon={<AdbIcon />} size="small"><span className='opcion'>Species</span></Button>
          </ButtonGroup>
        </CardActions>
        <CardContent>
          {activeButton === "characters" ? <CharacterList charactersArray={film.characters} /> : null}
          {activeButton === "planets" ? <PlanetList planetsArray={film.planets} />: null}
        </CardContent>

          </>
      ) : (
        <CardContent onClick={handleCarddClick} className='tittleContent'>
          <Typography  className='titleCard' variant="h5" component="div">
            {film.title}
          </Typography>
        </CardContent>
      )
    }
    </Card>
 )
}

export default MoviesList;