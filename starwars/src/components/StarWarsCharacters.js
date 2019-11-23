import React, {useState, useEffect} from 'react';
import axios from "axios";
import WarCard from "./WarCard";





const StarWarsCharacter = () => {

const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response);
        setCharacterData(response.data.results);
      });
  }, []);

  return (

    {characterData.map((item, index) => {
          return <WarCard key={index} breed={breed} imgUrl={item} />;
        })}

    <div className = "characterContainer">
      <WarCard/>
    </div>
  );
}

export default StarWarsCharacter;
