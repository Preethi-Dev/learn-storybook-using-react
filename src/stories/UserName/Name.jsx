import React from "react";
import styled from "styled-components";
import "./name.css";

const Heading = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 1.75rem;
  color: ${(props) => props.theme.main};
  //interpolation function
  background-color: ${(props) => {
    console.log(props);
    return props.$isHighlight ? "#008980" : "palevioletred";
  }};
`;

const Name = ({ name }) => {
  return (
    <Heading
      $isHighlight={false}
      as={"li"}
      className="bg-black"
      theme={{ main: "white" }}
      css="padding: 5rem"
    >
      {name}
    </Heading>
  );
};

export default Name;
