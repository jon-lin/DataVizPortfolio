import React from 'react';
import Navbar from './Navbar';
import AnimationBanner from './AnimationBanner';
import VizIndex from './VizIndex';
import { vizTileData } from './vizTileData';

class App extends React.Component {
  constructor() {
    super()

    this.vizTileData = vizTileData;
  }

  render() {
    return (
      <div id="page">
        <Navbar />
        <AnimationBanner />
        <VizIndex vizData={this.vizTileData} />
      </div>
    )
  }
}

export default App;
