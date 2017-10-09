import React from 'react';
import Thumbnail from './Thumbnail';

class VizIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="vizIndex">
        { this.props.vizData.map(datum => <Thumbnail key={datum.filename} vizDatum={datum} />) }
      </div>
    )
  }
}

export default VizIndex;
