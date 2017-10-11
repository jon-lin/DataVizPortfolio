import React from 'react';

class Navbar extends React.Component {
  toggleMenuDropDown() {
    $('.fa-bars').toggleClass('selected');
    $('.dropdownMenu, .arrow-up').toggleClass("hidden");
  }

  render() {
    $('body').click(e => {
        if ($(e.target).closest('.navbarHamburgerContainer').length === 0 && document.querySelector('.selected')) {
          this.toggleMenuDropDown();
        }
    });

    return (
      <div id="navbar">

        <div className="navbarLogoAndText">
          <img className="navbarLogo" src=""></img>
          <text className="navbarText">Jon Lin's Data Viz Portfolio</text>
        </div>

        <div className="navbarHamburgerContainer">
          <i className="fa fa-bars"
            onClick={this.toggleMenuDropDown}
            aria-hidden="true" ></i>

          <div className="arrow-up hidden"></div>

          <div className="dropdownMenu hidden">
            <a onClick={this.toggleMenuDropDown} href="https://www.jon-lin.com/" target="_blank">About Me</a>
            <a onClick={this.toggleMenuDropDown} href="https://github.com/jclin2013/" target="_blank">Github</a>
            <a onClick={this.toggleMenuDropDown} href="https://www.linkedin.com/in/jclin2013/" target="_blank">LinkedIn</a>
            <a onClick={this.toggleMenuDropDown} href="https://angel.co/jclin2013" target="_blank">AngelList</a>
            <a onClick={this.toggleMenuDropDown} href="https://drive.google.com/file/d/0B2wkz0QyfcNAem95ZGdEUEFnMFU/view?usp=sharing" target="_blank">Resume</a>
          </div>

        </div>

      </div>
    )
  }
}

export default Navbar;
