import React, {useState, useEffect} from 'react';
import axios from "axios";
import WarCard from "./WarCard";





const StarWarsCharacter = () => {

const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response);
        setCharacterData(response.data.results);
      });
  }, []);

  return (
    <div>
      {characterData.map((eachCharacter, index) => (
        <WarCard key= {index} eachCharacter = {eachCharacter} />
      ))}
    </div>
  
  );
};


export default StarWarsCharacter;
