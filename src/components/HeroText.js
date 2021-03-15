import React from "react";
import styled from "styled-components";

const HeroText = () => {
  return (
    <Container>
      <h1>Machine Learning.</h1>
      <h1>Piano.</h1>
      <h1>Composition.</h1>
        <BtnContainer>
        <Button>Demo Video</Button>
        </BtnContainer>
    </Container>
  );
};

const Button = styled.button`

background: #ffffff;
border: solid;
padding: 0.9rem 1.1rem;
color: #ed61ac;
border-color: #ed61ac;
border-radius: 0.5rem;
transition: all 0.3s ease-in-out;
margin: 0.5rem;
font-size: 0.8rem;
font-weight: 800;
cursor: pointer;
&:hover {
  color: #ffffff;
  background: #ff61b6;
  border-color: #ff61b6;
}

`;

const Button2 = styled.button`
  font-size: 0.8rem;
  background: #96a1ff;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 13px 24px -7px #ecb6d7;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 17px 16px -11px #ecb6d7;
    transform: translateY(-5px);
    background: #828fff;
  }
  @media (max-width: 670px) {
    /* width: 100%; */
    padding: 0.3;
  }
`;

const BtnContainer = styled.div`
  margin-top: 2rem;
  
  
`;

const Container = styled.div`
  padding: 1rem;
  padding-top: 4rem;
  h5 {
    color: #515151;
    font-weight: 500;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0.1rem;
    &:nth-of-type(1) {
      color: #ffffff;
      font-weight: 500;
    }
    &:nth-of-type(2) {
      color: #ffffff;
    }
    &:nth-of-type(3) {
      color: #ffffff;
    }
    &:nth-of-type(4) {
      color: #ffffff;
    }
  }
`;

export default HeroText;