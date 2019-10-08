import React, { Component } from 'react';
import './style.css';

export default class ScrollButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1
    };
    this.click = this.click.bind(this);
  }

  click() {
    const { section } = this.state;
    if (section < 4) {
      window.scrollTo(0, section * 500);

      this.setState({
        section: section + 1
      });
    }
  }

  nothing() {
    const { section } = this.state;
    this.setState({
      section
    });
  }

  render() {
    return (
      <div
        role="button"
        aria-roledescription="cliker"
        className="button"
        onClick={this.click}
        onFocus={this.nothing}
        tabIndex={-1}
        onKeyDown={this.nothing}
      >
        <div className="arrow" />
      </div>
    );
  }
}