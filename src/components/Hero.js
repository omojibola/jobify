import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

const Hero = () => (
  <Jumbotron fluid style={{ backgroundColor: "#367DFF", borderRadius: 5 }}>
    <Container style={{ color: "white", textAlign: "center" }}>
      <h1>Search for Live jobs near you</h1>
      <p>Your job search Just got easier</p>
    </Container>
  </Jumbotron>
);

export default Hero;
