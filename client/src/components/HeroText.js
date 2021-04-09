import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons'
import * as Tone from 'tone'

const demoNotes = ["B2","B4","B1","B5","B2","B5","B2","D6","B3","D3","B4","B1","B5","B2","B5","B3","B2","B5","B2","F#5","F#2","B4","B1","E4","B3","E1","B3","B0","B4","B1","B5","B2","B5","B3","B2","B4","B1","B5","B2","B5","B2","D6","B3","D3","4","E2","4","E2","4","E2","6","F#2","6","F#2","6","F#2","F#4","F#2","F#3","C#5","C#5","F#3","D5","C#5","B4","F#3","C#5","F#4","F#3","D5","B4","F#3","C#5","F#3","F#4","F#2","F#3","D5","B4","F#3","C#5","F#3","B4","A4","F#3","B4","G#4","A4","F#3","F#4","F#3","F#4","F#2","F#3","C#5","C#5","F#3","D5","C#5","B4","F#3","C#5","F#4","F#3","D5","B4","F#3","C#5","F#3","F#4","F#2","F#3","D5","B4","F#3","C#5","F#3","B4","A4","F#3","B4","G#4","A4","F#3","F#4","G#3","6.9.1","A2","E3","A3","6.9.1","C#4","A4","A4","6.9.1","F#2","C#3","F#3","1.6","A3","G#4","G#4","4.8.11","E2","B2","E3","11.4","G#3","G#4","G#4","4.8.11","C#2","G#2","C#3","4.8.11","E3","C#5","C#5","C#5","6.9.1","A2","E3","A3","9.1.4","C#4","C#5","C#5","9.1.4","F#2","C#3","F#3","11.2","A3","C#5","D5","4.8.11","E2","B2","4.8.11","E3","4.8.11","G#3","4.8.11","4.8.11","4.8.11","9.1.4","C#2","G#2","9.1.4","C#3","9.1.4","E3","4.9","4.9","4.9","F#4","9.1","F#3","F#2","C#5","C#5","F#3","D5","1.6","6.11","F#3","1.6","6.9.1","F#3","D5","B4","F#3","C#5","A4","A4","F#3","A4","F#4","9.1","F#2","F#3","D5","B4","F#3","C#5","F#4","F#4","F#3","6.11","1.6","A4","F#3","B4","G#4","A4","F#3","F#4","F#3","F#4","F#2","F#3","1","1","F#3","D5","1","B4","F#3","1","F#4","F#3","D5","B4","F#3","1","F#3","F#4","F#3","F#2","2","B4","F#3","1","F#3","11","A4","F#3","11","G#4","9","F#3","F#4","F#3","F#2","1","1","1","1.6","0","F#3","11","11","11","10","9","F#2","F#3","9","1","1","1","1.6","0","F#3","F#2","11","11","11","10","1.6","9","F#3","9","1","1","2","3","F#3","F#2","4","4","4","4","3","3","2","1.6","9","F#3","F#2","11","0","1","1.6","A4","F#3","E4","F#4","A4","A4","F#4","A4","B4","1.6","F#3","F#2","6.9","C#4","F#3","4.8","F#2","1.6","F#3","1.6","C4","F#5","F#3","F#2","B3","A5","F#5","F#3","G#5","E5","F#2","B-3","C#5","F#5","F#3","F#5","C#5","A3","F#5","F#2","F#3","A5","6.9","C#4","F#3","G#5","4.8","F#2","F#5","1.6","F#3","1.6","F#5","C4","F#5","F#3","F#2","B3","6","F#3","6","F#2","6","B-3","6","F#3","6","A3","6","1.6","F#3","F#2","A5","F#5","C#4","F#3","G#5","E5","F#2","D4","C#5","F#5","F#3","E-4","F#5","C#5","F#5","F#5","F#3","F#2","E4","A5","6.9","F#3","G#5","4.8","3.6","F#5","1.6","2.6","1.6","F#5","F#5","F#3","F#2","C#4","9","F#5","F#3","8","E5","F#2","C4","6","C#5","F#3","F#5","1.6","F#5","A4","F#2","F#3","E4","F#4","A4","F#3","A4","F#2","F#4","A4","F#3","B4","6.9.1","A2","E3","A3","6.9.1","C#4","A4","A4","6.9.1","F#2","C#3","F#3","1.6","A3","G#4","G#4","4.8.11","E2","B2","E3","11.4","G#3","G#4","G#4","4.8.11","C#2","G#2","C#3","4.8.11","E3","C#5","C#5","C#5","6.9.1","A2","E3","A3","9.1.4","C#4","C#5","C#5","9.1.4","F#2","C#3"]
const octaveAdj = 60
  const speed = 0.25

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
        processed_output.push(freq(parseInt(prediction_output[i]) + octaveAdj))
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

const control = (params) => {
  params.setDemoOn(false)

}

const HeroText = (props) => {
  const {params} = props
  console.log(params.demoOn)
  return (
    <Container>
      <h1>Machine Learning.</h1>
      <h1>Piano.</h1>
      <h1>Composition.</h1>
        <BtnContainer>
        <Button>Demo Video</Button>
        <Button2 onClick={() => {
          if (params.demoOn) {

          } else {  
            params.setDemoOn(true)
            playMusic(demoNotes)
            setTimeout(function(){ 
                params.setDemoOn(false)
            }, 125000);

          }
        }
        }>
          
  <FontAwesomeIcon icon={faPlay} />
              
        </Button2>

        </BtnContainer>
    </Container>
  );
};
/*
<Button2 onClick={() => {
          if (params.demoOn) {
            stopMusic();
          } else {
            playMusic(demoNotes)
          }
          params.setDemoOn(!params.demoOn)
        }
        }>
          {params.demoOn ? (
          <FontAwesomeIcon icon={faPlay} />
) : (
  <FontAwesomeIcon icon={faPlay} />
              )}
        </Button2>

*/

const Button = styled.button`
outline: none;

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
outline: none;

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