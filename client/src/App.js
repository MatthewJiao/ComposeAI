import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Theme from "./components/Theme"
import Pitch from "./components/Pitch"
import Duration from "./components/Duration"
import Offset from "./components/Offset"
import { names2 } from './components/names';


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
  const [currentIndex, setCurrentIndex] = useState();
  const [playList, setPlayList] = useState([]);
  const [timer, setTimer] = useState(false);
  const [demoOn, setDemoOn] = useState(false);
  const [playOn, setPlayOn] = useState(false);


  const [playAble, setPlayAble] = useState(false);

  const params = {playOn, setPlayOn, setDemoOn, demoOn, theme1, timer, setTimer, setCurrentIndex, currentIndex, playList, playAble, currentNotes, selectTheme, setSelectTheme, selectDuration, setSelectDuration, selectOffset, setSelectOffset}

  const adj = ["admiring","adoring","affectionate","agitated","amazing","angry","awesome","beautiful","blissful","bold","boring","brave","busy","charming","clever","cool","compassionate","competent","condescending","confident","cranky","crazy","dazzling","determined","distracted","dreamy","eager","ecstatic","elastic","elated","elegant","eloquent","epic","exciting","fervent","festive","flamboyant","focused","friendly","frosty","funny","gallant","gifted","goofy","gracious","great","happy","hardcore","heuristic","hopeful","hungry","infallible","inspiring","interesting","intelligent","jolly","jovial","keen","kind","laughing","loving","lucid","magical","mystifying","modest","musing","naughty","nervous","nice","nifty","nostalgic","objective","optimistic","peaceful","pedantic","pensive","practical","priceless","quirky","quizzical","recursing","relaxed","reverent","romantic","sad","serene","sharp","silly","sleepy","stoic","strange","stupefied","suspicious","sweet","tender","thirsty","trusting","unruffled","upbeat","vibrant","vigilant","vigorous","wizardly","wonderful","xenodochial","youthful","zealous","zen",]
  const names3 = names2
  
  const handleNotes = (notes) => {
   // var newNotes = currentNotes.push(notes)
   // var newTitle = playList.push("new song")
    //console.log(newNotes)
    setTimer(false)
    console.log('kk', theme1)
    const index = playList.length;
    setCurrentIndex(index);

    const random1 = Math.floor(Math.random() * adj.length);
    const random2 = Math.floor(Math.random() * names3.length);
    var newName = adj[random1].concat(" ");
    var newName = newName.concat(names3[random2])
    setCurrentNotes([...currentNotes, notes])
    setPlayList([...playList, newName])

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
            component={() => <Hero handleChange={handleChange} maintain={1} params = {params} />}
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
