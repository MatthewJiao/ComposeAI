import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Theme from "./components/Theme"
import Pitch from "./components/Pitch"
import Duration from "./components/Duration"
import Offset from "./components/Offset"

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
  const [home, setHome] = useState(false);
  const [theme1, setTheme1] = useState(false);
  const [pitch, setPitch] = useState(false);
  const [duration, setDuration] = useState(false);
  const [offset, setOffset] = useState(false);
  const [selectTheme, setSelectTheme] = useState('n/a');
  const [selectDuration, setSelectDuration] = useState([0,100]);
  const [selectOffset, setSelectOffset] = useState([0,100]);
  const [currentNotes, setCurrentNotes] = useState([]);
  const [playList, setPlayList] = useState([]);

  const [playAble, setPlayAble] = useState(false);

  const params = {playList, playAble, currentNotes, selectTheme, setSelectTheme, selectDuration, setSelectDuration, selectOffset, setSelectOffset}


  
  const handleNotes = (notes) => {
   // var newNotes = currentNotes.push(notes)
   // var newTitle = playList.push("new song")
    //console.log(newNotes)
    setCurrentNotes([...currentNotes, notes])
    setPlayList([...playList,"new son"])

    setPlayAble(true)
  }

  function handleChange(maintain) {
    setHome(false);
    setTheme1(false);
    setPitch(false);
    setDuration(false);
    setOffset(false);

    if (maintain == 1) {
      setHome(true);
    } else if (maintain == 2) {
      setTheme1(true)
    } else if (maintain == 3) {
      setPitch(true)
    } else if (maintain == 4) {
      setDuration(true)
    } else {
      setOffset(true)
    }
  }
  
// hmmmmm
  return (
    <>
      <Router>
        <Navbar 
          home={home}
          theme1={theme1}
          pitch={pitch}
          duration={duration}
          offset={offset}
          params = {params}
          handleNotes = {handleNotes}
        />
        <Switch>
          <Route path="/" exact 
            component={() => <Hero handleChange={handleChange} maintain={1} />}
          />
          <Route path="/theme" 
            component={() => <Theme handleChange={handleChange} maintain={2} params = {params}/>}  
          />
          <Route path="/pitch" 
            component={() => <Pitch handleChange={handleChange} maintain={3} params = {params}/>}
          />
          <Route path="/duration" 
            component={() => <Duration handleChange={handleChange} maintain={4} params = {params}/>}
          />
          <Route path="/offset" 
            component={() => <Offset handleChange={handleChange} maintain={5} params = {params}/>}
          />

        </Switch>
      </Router>
    </>
  )
}

export default App
