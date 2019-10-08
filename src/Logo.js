import React from 'react';
import './index.css';

class Logo extends React.Component {
  render() {
    return (
      <div className="Container">
        <img
          src="https://duckduckgo.com/assets/logo_homepage.normal.v108.svg"
          ref={window.scrollTo(0, 250)}
          className="mainLogo"
         alt="imagen"/>

        <span className="tag">conocer más</span>
      </div>
    );
  }
}

export default Logo;
