import React from 'react';

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.d = this.props.vizDatum;
  }

  handleMouseOver(e) {
    e.target.classList.remove("hidden");
  }

  handleMouseOut(e) {
    e.target.classList.add("hidden");
  }

  render() {
    let d = this.d;

    return (
      <div className="thumbnailContainer">
        <a href={d.url}
          data-rel={d.label !== "DiseaseLookup" && "lightcase"}
          target={d.label === "DiseaseLookup" && "_blank"}
          data-lc-options={"{" +
          '"forceHeight":' + (d.forceHeight || false) + "," +
          '"forceWidth":' + (d.forceWidth || false) + "," +
          '"iframe":' + '{' +
            '"width":' + (d.frameW || "auto") + "," +
            '"height":' + (d.frameH || "auto")
          + "}}"}
        >

          <img
            className="vizThumbnailImage"
            src={"thumbnails/" + d.filename}
          />

          <div className="imageLabelContainer hidden"
               onMouseOver={this.handleMouseOver}
               onMouseOut={this.handleMouseOut}>
            <div id="imageLabel">{d.label}</div>
            <div id="imageSublabel">{d.sublabel}</div>
            <div id="image3rdlabel">{d.thirdLabel}</div>
          </div>

        </a>
      </div>
    );
  }
}

export default Thumbnail;
