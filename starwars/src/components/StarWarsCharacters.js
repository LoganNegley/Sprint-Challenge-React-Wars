import React, {useState, useEffect} from 'react';
import axios from "axios";
import WarCard from "./WarCard";
import styled from "styled-components";

const MainContainer = styled.div`
display:flex;
flex-flow:wrap row;
justify-content:space-around;
`



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
    <MainContainer>
      {characterData.map((eachCharacter, index) => (
        <WarCard key= {index} eachCharacter = {eachCharacter} />
      ))}
    </MainContainer>
  
  );
};


export default StarWarsCharacter;
