import { Enviroments } from "../../environment/enviromentDev";
import { MS_starwars } from "../../models/MsStarwars/StarwarsApi";

const MS_STARWARS = Enviroments.Ms_Starwars;
const PATH = MS_starwars;

export const searchFilms = async () => {
  try {
    const response = await fetch(`${MS_STARWARS}${PATH.movies}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("data.result de films: ", data.results);
    return data.results;
  } catch (error) {
    console.error('Error fetching films:', error);
    throw error;
  }
};

export const searchCharacter = async (num:string) => {
  try {
    const response = await fetch(`${MS_STARWARS}${PATH.character}/${num}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};

export const searchPlanet = async (num:string) => {
  try {
    const response = await fetch(`${MS_STARWARS}${PATH.planet}/${num}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("data de ", num, " : ", data);
    return data;
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};