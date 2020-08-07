import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Hero = ({ bigText, smallText }) => (
  <Jumbotron fluid style={{ backgroundColor: "#367DFF", borderRadius: 5 }}>
    <Container style={{ color: "white", textAlign: "center" }}>
      <h1>{bigText}</h1>
      <p>{smallText}</p>
    </Container>
  </Jumbotron>
);

export default Hero;
