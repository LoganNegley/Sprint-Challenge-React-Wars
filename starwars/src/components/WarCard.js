import React from "react";
// import styled from "styled-components";








const WarCard = props => {
  return (
    <div className="war-card ">
  <h1>{props.eachCharacter.name}</h1>
<ul>
 <li>Gender: {props.eachCharacter.gender}</li>
  <li>Year Born: {props.eachCharacter.birth_year}</li>
  <li>Eye Color: {props.eachCharacter.eye_color}</li>
   <li>Hair Color: {props.eachCharacter.hair_color}</li>
   
</ul>


    </div>
  );
};
export default WarCard;
