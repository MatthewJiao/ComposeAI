import React, { Component } from 'react';
import styled from "styled-components";
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import bg from "../assets/bg3.jpg";
import mozart from "../assets/mozart.png";
import beethoven from "../assets/beethoven.jpg";
import frozen from "../assets/frozen.jpg";
import kpop from "../assets/kpop.jpg";
import anime from "../assets/anime.jpg";
import pop from "../assets/pop.jpg";

import rock from "../assets/rock.jpg";
import gaming from "../assets/gaming.jpg";
import contemporary from "../assets/contemporary.jpg";
import DurationSlider from './durationSlider'
import OffsetSlider from './offsetSlider'

class GridTheme extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return false; // equals() is your implementation
 }
 
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var opac = 0.5;
    var styleX = { width: '200px', height: '200px', color: "#eb4034", background : "#eb4034", opacity: opac, borderRadius: "0.7rem"  }
    var {params} = this.props

    

    const selected = (theme) => {
        params.setSelectTheme(theme)
    }
    

    return (
        
      <IsometricGrid
        shadow
        transform="rotateX(70deg) rotateZ(20deg)"
        stackItemsAnimation={{
          properties: function(pos) {
            return {
              translateZ: (pos + 1) * 8,
              rotateZ: getRandomInt(-20, 20),
            };
          },
          options: function(pos, itemstotal) {
            return {
              type: dynamics.bezier,
              duration: 1500,
              points: [
                { x: 0, y: 0, cp: [{ x: 0.2, y: 2 }] },
                { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
              ],
              delay: (itemstotal - pos - 1) * 40,
            };
          },
        }}
        style={{ height: '700px', width: '700px', position: 'absolute', left: "18%", top: 0, border: "none", borderWidth: "0.2rem", borderColor: "#ffffff", padding: "0rem" }}
      >
          <Cell
          layers={[
            `${beethoven}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "beethoven"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034"}}
          layerStyle = {styleX}
          onClick = {() => selected("beethoven")}
        />
        <Cell
          layers={[
            `${mozart}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "mozart"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034", }}
          layerStyle = {styleX}
          onClick = {() => selected("mozart")}
        />
    
        <Cell
          layers={[
            `${frozen}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "movie"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("movie")}
        />
        <Cell
          layers={[
            `${rock}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "rock n roll"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("rocknroll")}
        />
        
        <Cell
          layers={[
            `${contemporary}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "contemporary"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("contemporary")}
        />
        <Cell
          layers={[
            `${pop}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "Pop"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("pop")}
        />
        
        <Cell
          layers={[
            `${kpop}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "kpop"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("kpop")}
        />
        <Cell
          layers={[
            `${anime}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "anime"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("anime")}
        />
        <Cell
          layers={[
            `${gaming}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "Gaming"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("gaming")}
        />
        <br/>
        <br/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Wrapper1>
            <DurationSlider params = {params}/>
        </Wrapper1>
        <Wrapper2>
            <OffsetSlider params = {params}/>
        </Wrapper2>
      </IsometricGrid>
      
    );
  }
}

export default GridTheme;

const Wrapper1 = styled.div`
position: absolute;
left: 5%;

`;
const Wrapper2 = styled.div`
position: absolute;
left: 68%;

`;