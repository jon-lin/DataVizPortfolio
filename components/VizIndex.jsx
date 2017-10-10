import React from 'react';
import Thumbnail from './Thumbnail';

class VizIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="vizIndex">
        <div id="vizIndexInnerContainer">
          {
            this.props.vizData.map(datum =>
              <Thumbnail key={datum.filename}
                vizDatum={datum} />
            )
          }
        </div>
      </div>
    )
  }
}

export default VizIndex;
