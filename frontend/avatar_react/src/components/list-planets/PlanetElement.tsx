import React, { useState, useEffect, useCallback } from 'react';
import './PlanetElement.css'
import { searchPlanet } from '../../services/MsStarwarsService/MsStarwarsServiceV1';
import { PlanetDto } from '../../models/MsStarwars/Response/StarwarsControllerV1';
import { Card, CardContent, CircularProgress, Typography } from '@mui/material';

function PlanetElement({ planetURL, delay }: { planetURL:string, delay:number }) {
  const [planets, setPlanets] = useState<string>('0');
  const [planetsDetails, setPlanetsDetails] = useState<PlanetDto | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<boolean>(false);

  useEffect( 
    () => {
      console.log("inicio useEffect1", planetURL, "planet", planets, "delay",delay );
      const num = extraerNumeroYAplicarFuncion(planetURL);
      console.log("inicio useEffect1", planetURL, "num", num, "delay",delay );
      fetchPlanetDetails(num);
      console.log("final useEffect1", planetURL, "planet", planets , "delay",delay)}
    , []
  );
  
  function extraerNumeroYAplicarFuncion(url:string) {
    const partes = url.split('/');
    const numero = partes[partes.length - 2];
    console.log("======");
    console.log(numero);
    console.log("======");
    return numero;
  };

  async function fetchPlanetDetails(num:string) {
    try {
      setLoading(true);
      const searchPlanetDetail = await searchPlanet(num);
      console.log('searchPlanetDetail', searchPlanetDetail);
      setPlanetsDetails(searchPlanetDetail);
      console.log('planetDetail', planetsDetails);
      setStatus(true);
    } catch (error) {
      setPlanetsDetails({} as PlanetDto);
      setStatus(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="Card_element" sx={{ minWidth: 275 }}>
    {
      (loading || !status || !planetsDetails) ? (
        <CardContent className="CardContent_element">
          <Typography className='titleCard' variant="h5" component="div">
            <CircularProgress size={20} />
            Cargando
          </Typography>
        </CardContent>
        ) : (
          <CardContent className="CardContent_element">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {planetsDetails.gravity}
          </Typography>
          <Typography className='titleCard' variant="h5" component="div">
            {planetsDetails.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Terrain: {planetsDetails.terrain}
          </Typography>
          <Typography variant="body2">
            Population: {planetsDetails.population}
          </Typography>
          </CardContent>
        )
      }
      </Card>
  )

}

export default PlanetElement;