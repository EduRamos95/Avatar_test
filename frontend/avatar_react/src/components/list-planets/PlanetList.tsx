import React, { useState, useEffect } from 'react';
import './PlanetList.css'
import { searchPlanet } from '../../services/MsStarwarsService/MsStarwarsServiceV1';
import { PlanetDto } from '../../models/MsStarwars/Response/StarwarsControllerV1';
import PlanetElement from './PlanetElement';

function PlanetList({ planetsArray }: { planetsArray: Array<string> }) {
  const [planets, setPlanets] = useState(planetsArray);

  return (
    <div className='data'>
      {
        planets.map( (planet, index) => <PlanetElement key={index} planetURL={planet} delay={index*2000}/> )
      }
    </div>
  );
}

export default PlanetList;