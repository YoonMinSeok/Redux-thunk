import React, { Component } from 'react';
import Map from "./components/Map.js";
import './Map.css';

class CoronaMap extends Component {
  render(){ 
    return (
    <div className="CoronaMap">
      <Map></Map>
    </div>
  );
 }
}

export default CoronaMap;
