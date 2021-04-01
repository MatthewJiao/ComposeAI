import React from "react";
import styled from "styled-components";
import image from "../assets/music14.png";
import bg from "../assets/bg3.jpg";
import HeroText from "./HeroText";
import GridTheme from "./GridTheme";

import Tilt from "react-tilt";
import RangeSlider from './durationSlider'

const PlayList = (props) => {
  const Narray = ['hi', 'nope', 'later']
  const {params} = props;
  console.log(params.playList.length)
  if (params.playList.length != 0) {
  return (
    
    <InnerWrapper>

            
          {params.playList.map(function(object, index) { // for each element in the Roles array, display it https://stackoverflow.com/questions/37997893/promise-error-objects-are-not-valid-as-a-react-child
              return (

                <Button index = {index} now = {params.currentIndex} title="" onClick = {() => props.params.setCurrentIndex(index)}>
                    {object}
                </Button>
              );
            })}
        </InnerWrapper>
  );
        } else {
            return null;
        }
};


const Button = styled.button`

background: ${({ index, now }) => (now == index ? "#000000" : "#ffffff")};

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

const InnerWrapper = styled.div`
overflow-y: scroll;
position: absolute;
right: 0;
top: 90%;
width: 13rem;
max-height: 30rem;


`;

export default PlayList;