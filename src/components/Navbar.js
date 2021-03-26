import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import {Link} from 'react-router-dom'
import Name from "./Name";
import axios from 'axios';
import {note, chord, instrument, midi_stream, stream, fp} from "music21j/releases/music21.debug.js"
import MidiWriter from 'midi-writer-js'
import fs from 'fs'
import * as Tone from 'tone'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {home, theme1, pitch, duration, offset, params, handleNotes} = props;
  const octaveAdj = 60
  const speed = 0.3

  const freq = (n) => {
    var frequency = 440*Math.pow(2, ((n-69)/12))
    return frequency
  }

  function isNumeric(num){
    return !isNaN(num)
  }

  const playMusic = (prediction_output) => {
    console.log(prediction_output)
    var processed_output = []
    for (var i = 0; i < prediction_output.length; ++i) {
      if (prediction_output[i].includes('.')) {
        var notes_in_chord = prediction_output[i].split('.')
        var chord = []
        for (var j = 0; j < notes_in_chord.length; ++j) {
          //console.log(parseInt(notes_in_chord[j]))
          chord.push(freq(parseInt(notes_in_chord[j]) + octaveAdj))
        }
        processed_output.push(chord)
      } else if (prediction_output[i].includes('-')) {
        if (prediction_output[i].length == 3) {
          processed_output.push(prediction_output[i].replace('-','b'))
        } else {
          processed_output.push(prediction_output[i].replace('-','b4'))
        }
      } else if (isNumeric(prediction_output[i])) {
        processed_output.push(freq(parseInt(prediction_output[i])))
      } else {
        processed_output.push(prediction_output[i])
      }
    }
    console.log(processed_output)
    console.log(prediction_output)
    
    const now = Tone.now()
    const synth = new Tone.Synth().toDestination();
    const polySynth = new Tone.PolySynth().toDestination();
    //synth.triggerAttackRelease('Bb4', "8n");
    
    var offset = []
    for (var i = 0; i < processed_output.length; ++i) {
      offset[i] = now + i*speed;
    }

    for (var i = 0; i < processed_output.length; i++) {
      if (Array.isArray(processed_output[i])) {
        polySynth.triggerAttackRelease(processed_output[i], 0.5, offset[i]);
      } else {
        synth.triggerAttackRelease(processed_output[i], 0.5, offset[i])
      }

    }


    
    
  }


  const getNotes = () => {
    if (params.selectTheme == 'n/a') {
      alert('no theme selected')
    } else {
    axios.get(`http://127.0.0.1:5000/predict/${params.selectTheme}`)
      .then(res => {
        const notes = res.data;
        handleNotes(notes)
      })
      .then(res => {
        console.log(params.currentNotes)
      })
      
      console.log("wummmorking");
    }

  }


  return (
    <Nav>
      <Container>
        
        <Logo>
            <h1>ComposeAI</h1>
            </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <LinkWrapper 
          home = {home} 
          theme1 = {theme1} 
          pitch = {pitch} 
          duration = {duration} 
          offset = {offset} 
          >


            <Link className="home" to="/">
              <h3>Home</h3>            
            </Link>
            <Link className="theme" to="/theme">
                <h3>Theme</h3> 
            </Link>
            {/*
            <Link className="pitch" style={{ color: (pitch ? "#594e42" : "#424140"), marginLeft: "0.5rem" }} to="/pitch">
                <h3>Pitch</h3>
            </Link>
            <Link className="duration" style={{ color: (duration ? "#594e42" : "#424140"), marginLeft: "0.5rem" }} to="/duration">
                <h3>Duration</h3>
            </Link>
            <Link className="offset" style={{ color: (offset ? "#594e42" : "#424140"), marginLeft: "0.5rem" }} to="/offset">
                <h3>Offset</h3>
            </Link>
            */}
            
            <Button onClick={() => getNotes()}>Compose</Button>
            <Button2 playAble ={params.playAble} onClick={() => playMusic(params.currentNotes)}>
              Play
              
            </Button2>

          </LinkWrapper>
        </Menu>
      </Container>
    </Nav>
  );
};

export default Navbar;

const Logo = styled.div`
    h1 {
        padding-left: 0rem;
        font-size: 2rem;
        font-weight: 600;
        color: #ffffff;
        cursor: pointer;
        border: none;
        border-radius: 0.5rem;
        border-color: #faf5ff;
        padding: 0.1rem;
        margin-top: 1.5rem;
        margin-left: 3rem;
        font-family: Raleway;
    
    }
    transition: all 0.3s ease-in-out;
    padding-top: 0rem;
    padding-bottom: 0rem;
    height: 5rem;
    &:hover {
      transform: translateX(-5px) ;

    }


`;


const Button = styled.button`
background: #ffffff;
border: solid;
padding: 0.9rem 1.1rem;
color: #9f5ec4;
border-color: #9f5ec4;
border-radius: 0.5rem;
font-weight: 800;

transition: all 0.3s ease-in-out;
margin: 0.5rem;
font-size: 0.8rem;
cursor: pointer;
&:hover {
  color: #ffffff;
  background: #9f5ec4;
  border-color: #9f5ec4;
}
`;

const Button2 = styled.button`
background: #ffffff;
border: solid;
padding: 0.9rem 1.1rem;
color: #ed61ac;
border-color: #ed61ac;
border-radius: 0.5rem;
transition: all 0.3s ease-in-out;
font-weight: 800;

font-size: 0.8rem;
cursor: pointer;
&:hover {
  color: #ffffff;
  background: #ff61b6;
  border-color: #ff61b6;
}
 
  display: ${({ playAble }) => (playAble ? "block" : "none")};
  
`;

const BtnContainer = styled.div`
  margin-top: 2rem;
  button {
    background: #ffffff;
    border: solid;
    padding: 0.9rem 1.1rem;
    color: #96a1ff;
    border-radius: 0.5rem;
    transition: all 0.3s ease-in-out;
    margin: 0.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      color: #ffffff;
      background: #96a1ff;
      border-color: #96a1ff;
    }
  }
  
`;

const MenuLink = styled.a`
  text-decoration: none;

  color: #000000;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  transition: all 0.2s ease-in;
  border-radius: 0.5rem;
  font-weight: 500;
  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }

  h3 {
      color: #5a5799;
  }



`;

const Container = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: auto;
  margin: auto;
  width: 100%;
  padding: 2rem;
  padding-bottom: 0rem;
  padding-top: 0rem;

  svg {
    height: 1.4rem;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: #858586;
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight: 500;
    &:hover {
      color: #000000;
      background: #ffffff;
    }
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0.9);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      -webkit-backdrop-filter: blur(35px);
      backdrop-filter: blur(15px);
      background-color: rgba(255, 255, 255, 0.4);
    }
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  padding: 1.5rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .home {
    h3 {
    font-weight: 600;
    }
    color: ${({ home }) => (home ? "#000000" : "#ffffff")};
    background: ${({ home }) => (home ? "#ffffff" : "ffffff")};

  }
  .theme {
    margin-left: 0.5rem;
    h3 {
      font-weight: 600;
      }
      color: ${({ theme1 }) => (theme1 ? "#000000" : "#ffffff")};
      background: ${({ theme1 }) => (theme1 ? "#ffffff" : "ffffff")};

  }
  .pitch {
    color: #7781d4;
    background: ${({ pitch }) => (pitch ? "#e7e9fc" : "transparent")};
    opacity: ${({ pitch }) => (pitch ? "0.8" : "1")};

  }
  .duration {
    color: #7781d4;
    background: ${({ duration }) => (duration ? "#e7e9fc" : "transparent")};
    opacity: ${({ duration }) => (duration ? "0.8" : "1")};

  }
  .offset {
    color: #7781d4;
    background: ${({ offset }) => (offset ? "#e7e9fc" : "transparent")};
    opacity: ${({ offset }) => (offset ? "0.8" : "1")};

  }

  h3 {
    font-weight: 500;

  }

  
  
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #f774c5;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;