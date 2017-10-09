import React from 'react';
import Navbar from './Navbar';
import Cube from './Cube';
import VizIndex from './VizIndex';
import { vizTileData } from './vizTileData';

class App extends React.Component {
  constructor() {
    super()

    this.vizTileData = vizTileData;
  }

  render() {
    return (
      <div>
        <Navbar />
        <Cube />
        <VizIndex vizData={this.vizTileData} />
      </div>
    )
  }
}

export default App;
