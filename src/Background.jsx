import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './App.css';

class Background extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { children } = this.props;
    return <div className="background">{children}</div>;
  }
}

Background.defaultProps = {
  children: null,
};

Background.propTypes = {
  children: PropTypes.node,
};

export default Background;
