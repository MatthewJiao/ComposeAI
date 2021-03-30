import React, { Component } from 'react';
import IsometricGrid, { Cell } from 'react-isometric-grid';
import dynamics from 'dynamics.js';
import bg from "../assets/bg3.jpg";
import num2 from "../assets/200.png";
import num1 from "../assets/100.png";
import num3 from "../assets/300.png";
import num4 from "../assets/400.png";
import num5 from "../assets/500.png";
import num6 from "../assets/600.png";
import num7 from "../assets/700.png";
import num8 from "../assets/800.png";
import num9 from "../assets/900.png";

class GridThemeDuration extends Component {
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
              translateZ: (pos + 1) * 4,
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
        style={{ height: '700px', width: '700px', position: 'absolute', left: "22%", top: 0, border: "none", borderWidth: "0.2rem", borderColor: "#ffffff", padding: "0rem" }}
      >
          <Cell
          layers={[
            `${num1}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "100 Notes"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034"}}
          layerStyle = {styleX}
          onClick = {() => selected("beethoven")}
        />
        <Cell
          layers={[
            `${num2}`,
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
            `${num3}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "bach"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("bach")}
        />
        <Cell
          layers={[
            `${num4}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "rock n roll"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("rock")}
        />
        <Cell
          layers={[
            `${num5}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "hip hop"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("hiphop")}
        />
        <Cell
          layers={[
            `${num6}`,
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
            `${num7}`,
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
            `${num8}`,
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
            `${num9}`,
            '#9972fc',
            '#c322a3',
            '#9eb5c2',
          ]}
          title = "Gaming"
          style = {{ width: '200px', height: '200px', transformStyle: 'preserve-3d', color: "#eb4034" }}
          layerStyle = {styleX}
          onClick = {() => selected("gaming")}
        />
      </IsometricGrid>
    );
  }
}

export default GridThemeDuration;