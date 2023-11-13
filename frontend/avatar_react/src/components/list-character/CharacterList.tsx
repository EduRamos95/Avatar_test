import React, { useState, useEffect } from 'react';
import './CharacterList.css'

function CharacterList({ charactersArray }: { charactersArray: Array<string> }) {
  const [characters, setCharacters] = useState(charactersArray);
  return (
    <div className='data'>
      {
        characters.map( (char, index) => <p key={index}>{char}</p> )
      }
    </div>
  );
}

export default CharacterList;