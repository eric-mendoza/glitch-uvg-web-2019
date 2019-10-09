import React, { Component } from 'react';
import './Slide.css';
import PropTypes from 'prop-types';

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      imgPath, txtColor, bgColor, title, description, shadow,
    } = this.props;
    const image = {
      backgroundImage: `url(${imgPath})`,
      width: '1000px',
      height: '385px',
      zoom: '0.8',
      margin: 'auto auto auto auto',
    };

    const bgColor1 = {
      background: `#${bgColor}`,
    };

    const textColor = {
      color: `#${txtColor}`,
    };

    const textShadow = {
      color: `#${txtColor}`,
      textShadow: '0 1px 4px rgba(0,0,0,0.25)',
    };

    return (
      <div className="slideContainer" style={bgColor1}>
        <h1 style={shadow ? textShadow : textColor}>{title}</h1>
        <h2 style={textColor}>{description}</h2>
        <button type="button">Add DuckDuckGo to Chrome</button>
        <div className="slideImage" style={image} />
      </div>
    );
  }
}

Slide.defaultProps = {
  imgPath: null,
  txtColor: null,
  bgColor: null,
  title: null,
  description: null,
  shadow: null,
};

Slide.propTypes = {
  imgPath: PropTypes.node,
  txtColor: PropTypes.node,
  bgColor: PropTypes.node,
  title: PropTypes.node,
  description: PropTypes.node,
  shadow: PropTypes.bool,
};

export default Slide;
