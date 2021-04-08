import React from "react";
import styled from "styled-components";
import image from "../assets/music14.png";
import bg from "../assets/bg3.jpg";
import HeroText from "./HeroText";
import GridTheme from "./GridTheme";
import PlayList from "./PlayList";

import Tilt from "react-tilt";
import RangeSlider from './durationSlider'

const Theme = React.memo((props) => {
  const {handleChange, maintain, params} = props;
  const Narray = ['hi', 'nope', 'later']
  handleChange(maintain);
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <GridTheme params = {params}/>

        </InnerWrapper>
      </Wrapper>

    </Container>
  );
});


const Button = styled.button`

background: #ffffff;
border: solid;
padding: 0.9rem 1.1rem;
color: #347aeb;
border-color: #347aeb;
border-radius: 0.5rem;
transition: all 0.3s ease-in-out;
margin: 0.5rem;
font-size: 0.8rem;
font-weight: 800;
cursor: pointer;
&:hover {
  color: #ffffff;
  background: #347aeb;
  border-color: #347aeb;
}

`;

const Left = styled.div`
  width: 50%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
`;

const TiltWrapper = styled(Tilt)`
  width: 50%;
  cursor: pointer;
  min-width: 400px;
  @media (max-width: 670px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex-box;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`;
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 2rem; 
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.3);
  }
  */
  
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e2033;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Theme;