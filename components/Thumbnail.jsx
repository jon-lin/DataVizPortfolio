import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.d = this.props.vizDatum;
  }

  render() {
    let d = this.d;

    return (
      <a href={d.url}
        data-rel="lightcase"
        data-lc-options={"{" +
        '"forceHeight":' + (d.forceHeight || false) + "," +
        '"forceWidth":' + (d.forceWidth || false) + "," +
        '"iframe":' + '{' +
          '"width":' + d.frameW + "," +
          '"height":' + d.frameH
        + "}}"}
      >

        <img
          className="vizThumbnailImg"
          src={"thumbnails/" + d.filename}
        />

      </a>
    );
  }
}

export default Thumbnail;
