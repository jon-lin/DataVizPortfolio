import React from 'react';

class AnimationBanner extends React.Component {
  render() {
    return (
      <div id="animationBanner">

        {/*rotating cube code based off of CSS Demo: http://vveleva.com/css_demos/ */}
        <div className="cubeWrap">
  			  <div className="cube">
            <a href="https://github.com/jon-lin" target="_blank">
			         <div className="front">GitHub</div>
            </a>

            <a href="https://www.linkedin.com/in/jon-lin/" target="_blank">
			         <div className="back">LinkedIn</div>
            </a>

            <a href="https://angel.co/jon-cp-lin" target="_blank">
			         <div className="top">AngelList</div>
            </a>

            <a href="https://www.jon-lin.com/" target="_blank">
  			       <div className="bottom">Website</div>
            </a>

            <a href="https://drive.google.com/file/d/0B2wkz0QyfcNAem95ZGdEUEFnMFU/view?usp=sharing" target="_blank">
              <div className="left">Resume</div>
            </a>

            <a href="mailto:jon.cp.lin@gmail.com" target="_blank">
			        <div className="right">Email</div>
            </a>

  			  </div>
  			</div>

        <div id="particles-js"></div>
			</div>
    )
  }
}

export default AnimationBanner;
