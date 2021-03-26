import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import * as Tone from 'tone'

const demoNotes = ["9.1.4","E3","F#3","4.8.11","G#3","4.8.11","G#3","4.8.11","B3","4.8.11","G#3","B3","4.8.11","4.8.11","G#3","4.8.11","E4","7.11.2","G3","G3","7.11.2","G3","7.11.2","D3","7.11.2","G3","A3","7.11.2","7.11.2","G3","7.11.2","B3","7.11.2","7.11.2","7.11.2","A3","7.11.2","7.11.2","G3","2.6.9","D3","F#3","2.6.9","D3","2.6.9","A2","2.6.9","D3","2.6.9","E3","2.6.9","D3","2.6.9","F#3","F#3","4.7.11","E3","G3","4.7.11","E3","4.7.11","F#3","4.7.11","E3","4.7.11","G3","4.7.11","E3","4.7.11","B3","4.7.11","4.7.11","4.7.11","4.7.11","4.7.11","F#3","B-3","6.10.1","F#3","6.10.1","G3","6.10.1","F#3","6.10.1","G3","B-3","6.10.1","F#3","6.10.1","C#4","B3","C#3","11.2.6","B3","B3","11.2.6","B3","11.2.6","D4","11.2.6","B3","F#3","11.2.6","11.2.6","F#3","11.2.6","B3","11.2.6","11.2.6","11.2.6","D4","11.2.6","11.2.6","E4","6.10.1","F#3","6.10.1","C#4","6.10.1","F#3","6.10.1","B-3","C#4","6.10.1","6.10.1","F#3","6.10.1","B-3","6.10.1","6.10.1","9.1.4","A3","9.1.4","A3","9.1.4","A3","9.1.4","A3","B3","9.1.4","9.1.4","A3","9.1.4","A3","9.1.4","9.1.4","A3","9.1.4","B3","E3","9.1.4","9.1.4","E3","F#3","4.8.11","G#3","4.8.11","G#3","4.8.11","B3","4.8.11","G#3","B3","4.8.11","4.8.11","G#3","4.8.11","E4","7.11.2","G3","G3","7.11.2","G3","7.11.2","D3","7.11.2","G3","A3","7.11.2","7.11.2","G3","7.11.2","B3","7.11.2","7.11.2","7.11.2","A3","7.11.2","7.11.2","G3","2.6.9","D3","F#3","2.6.9","D3","2.6.9","A2","2.6.9","D3","2.6.9","E3","2.6.9","D3","2.6.9","F#3","F#3","4.7.11","E3","G3","4.7.11","E3","4.7.11","F#3","4.7.11","E3","4.7.11","G3","4.7.11","E3","4.7.11","B3","4.7.11","4.7.11","4.7.11","4.7.11","4.7.11","F#3","B-3","6.10.1","F#3","6.10.1","G3","6.10.1","F#3","6.10.1","G3","B-3","6.10.1","F#3","6.10.1","C#4","B3","C#3","11.2.6","B3","B3","11.2.6","B3","11.2.6","D4","11.2.6","B3","F#3","11.2.6","11.2.6","F#3","11.2.6","B3","11.2.6","11.2.6","11.2.6","D4","11.2.6","11.2.6","E4","6.10.1","F#3","6.10.1","C#4","6.10.1","F#3","6.10.1","B-3","C#4","6.10.1","6.10.1","F#3","6.10.1","B-3","6.10.1","6.10.1","9.1.4","A3","9.1.4","A3","9.1.4","A3","9.1.4","A3","B3","9.1.4","9.1.4","A3","9.1.4","A3","9.1.4","9.1.4","A3","9.1.4","B3","E3","9.1.4","9.1.4","E3","F#3","4.8.11","G#3","4.8.11","G#3","4.8.11","B3","4.8.11","G#3","B3","4.8.11","4.8.11","G#3","4.8.11","E4","7.11.2","G3","G3","7.11.2","G3","7.11.2","D3","7.11.2","G3","A3","7.11.2","7.11.2","G3","7.11.2","B3","7.11.2","7.11.2","7.11.2","A3","7.11.2","7.11.2","G3","2.6.9","D3","F#3","2.6.9","D3","2.6.9","A2","2.6.9","D3","2.6.9","E3","2.6.9","D3","2.6.9","F#3","F#3","4.7.11","E3","G3","4.7.11","E3","4.7.11","F#3","4.7.11","E3","4.7.11","G3","4.7.11","E3","4.7.11","B3","4.7.11","4.7.11","4.7.11","4.7.11","4.7.11","F#3","B-3","6.10.1","F#3","6.10.1","G3","6.10.1","F#3","6.10.1","G3","B-3","6.10.1","F#3","6.10.1","C#4","B3","C#3","11.2.6","B3","B3","11.2.6","B3","11.2.6","D4","11.2.6","B3","F#3","11.2.6","11.2.6","F#3","11.2.6","B3","11.2.6","11.2.6","11.2.6","D4","11.2.6","11.2.6","E4","6.10.1","F#3","6.10.1","C#4","6.10.1","F#3","6.10.1","B-3","C#4","6.10.1","6.10.1","F#3","6.10.1","B-3","6.10.1","6.10.1","9.1.4","A3","9.1.4","A3","9.1.4","A3","9.1.4","A3","B3","9.1.4","9.1.4","A3","9.1.4","A3","9.1.4","9.1.4","A3","9.1.4","B3","E3","9.1.4","9.1.4","E3","F#3","4.8.11","G#3","4.8.11","G#3","4.8.11","B3","4.8.11","G#3","B3","4.8.11","4.8.11","G#3","4.8.11","E4","7.11.2","G3","G3","7.11.2","G3","7.11.2","D3","7.11.2","G3","A3","7.11.2","7.11.2","G3","7.11.2","B3","7.11.2","7.11.2","7.11.2","A3","7.11.2","7.11.2","G3","2.6.9","D3","F#3","2.6.9","D3","2.6.9","A2","2.6.9"]
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

const HeroText = () => {
  return (
    <Container>
      <h1>Machine Learning.</h1>
      <h1>Piano.</h1>
      <h1>Composition.</h1>
        <BtnContainer>
        <Button>Demo Video</Button>
        <Button2 onClick={() => playMusic(demoNotes)}>
          <FontAwesomeIcon icon={faPlay} />
        </Button2>

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