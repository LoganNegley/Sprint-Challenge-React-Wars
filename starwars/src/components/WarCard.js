import React from "react";
import styled from "styled-components";

const WarCardContainer = styled.div`
width:25%;
border:2px black solid;
margin:2rem;
background-color:rgba(105,104,103, 0.6);

`
const Header =styled.h1`
font-size:4rem;
color:#F9B756;
`

const UnorderedList =styled.ul`
list-style-type:none;
`
const ListItems =styled.li`
font-size:3rem;

`






const WarCard = props => {
  return (
    <WarCardContainer className="war-card ">
  <Header>{props.eachCharacter.name}</Header>
<UnorderedList>
 <ListItems>Gender: {props.eachCharacter.gender}</ListItems>
  <ListItems>Year Born: {props.eachCharacter.birth_year}</ListItems>
  <ListItems>Eye Color: {props.eachCharacter.eye_color}</ListItems>
   <ListItems>Hair Color: {props.eachCharacter.hair_color}</ListItems>
   
</UnorderedList>


    </WarCardContainer>
  );
};
export default WarCard;
