import React, { Component } from 'react';
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import bg from "../assets/bg3.jpg";
import mozart from "../assets/mozart.png";
import beethoven from "../assets/beethoven.jpg";
import bach from "../assets/bach.png";
import kpop from "../assets/kpop.jpg";
import anime from "../assets/anime.jpg";
import pop from "../assets/pop.jpg";
import rock from "../assets/rock.jpg";
import gaming from "../assets/gaming.jpg";
import hiphop from "../assets/hiphop.jpg";
import test from "../assets/test.png";


class Name extends Component {
  render() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var opac = 0.5;
    

    

    
    

    return (
        
      <IsometricGrid
        shadow
        transform="rotateX(75deg) rotateZ(30deg)"
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
        style={{ height: '50px', width: '50px', position: 'relative', left: 90, top: 0, border: "none", borderWidth: "0.2rem", borderColor: "#ffffff", padding: "0rem" }}
      >
          <Cell
          layers={[
            `${test}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "beethoven"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {{ width: '200px', height: '200px', color: "#eb4034", background : "#eb4034", opacity: opac  }}
        />
        
      </IsometricGrid>
    );
  }
}

export default Name;