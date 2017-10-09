import React from 'react';
import Navbar from './Navbar';
import Cube from './Cube';
import VizIndex from './VizIndex';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Cube />
        <VizIndex />
      </div>
    )
  }
}

export default App;
