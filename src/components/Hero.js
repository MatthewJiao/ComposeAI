import React from "react";
import styled from "styled-components";
import image from "../assets/music14.png";
import bg from "../assets/bg3.jpg";
import HeroText from "./HeroText";
import Tilt from "react-tilt";
import DemoVideo from "./DemoVideo";

import tensorflow from "../assets/tensorflow.png";
import react from "../assets/react.png";
import tones from "../assets/tones.png";
import python from "../assets/python.png";
import gcloud from "../assets/gcloud.png";



const Hero = (props) => {
  const {handleChange, maintain} = props;
  handleChange(maintain);
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          <TiltWrapper options={{ max: 25 }}>
            <Img src={image} alt="" />
          </TiltWrapper>

        <Holder2>
        <div className="container">
          <div className="row">
            < img src={tensorflow} style ={{maxWidth: "8rem", maxHeight: "5rem"}}/>
            < img src={react} style ={{maxWidth: "4rem", maxHeight: "4rem"}}/>
            < img src={tones} style ={{maxWidth: "8rem", maxHeight: "5rem"}}/>
            < img src={python} style ={{maxWidth: "3rem", maxHeight: "5rem"}}/>
            < img src={gcloud} style ={{maxWidth: "8rem", maxHeight: "5rem"}}/>

          </div>
        </div>
        </Holder2>
        </InnerWrapper>
        <DemoVideo>

        </DemoVideo>
        
      </Wrapper>
    </Container>
  );
};

const Left = styled.div`
margin-top: 4rem;
  width: 50%;
  @media (max-width: 670px) {
    width: 100%;
    /* padding: 1rem; */
  }
  
`;

const Holder2 = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  background: #282a40;

  display: flex;
  align-items: center;
  justify-content: center;
  img {
    vertical-align: middle;
    margin-left: 3rem;
    margin-right: 3rem;
    cursor: pointer;
  }
  
`;

const TiltWrapper = styled(Tilt)`
margin-top: 7rem;

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
  display: flex;
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
    background-color: rgba(255, 255, 255, 0.4);
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

export default Hero;