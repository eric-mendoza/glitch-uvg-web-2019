import React from 'react';

function input() {
  const divStyle = {
    margin: '0',
    border: '0',
    font: 'inherit',
    fontSize: '100%',
    verticalAlign: 'baseline'
  };

  const formStyle = {
    fontSize: '1.14em',
    boxSizing: 'border-box',
    borderRadius: '4px',
    display: 'block',
    position: 'relative',
    height: '2.8em',
    backgroundColor: 'white',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.06)',
    paddingLeft: '0.75em',
    paddingRight: '6.5em'
  };

  const inputStyle = {
    fontSize: '1.1em',
    fontWeight: 'normal',
    display: 'block',
    width: '100%',
    background: 'none',
    outline: 'none',
    border: 'none',
    padding: '0',
    height: '2.545455em',
    zIndex: '1',
    position: 'relative',
    top: '-1px'
  };

  return (
    <div style={divStyle}>
      <form style={formStyle}>
        <input
          type="text"
          style={inputStyle}
          autoComplete="off"
          tabIndex="-1"
          value
          autoCapitalize="off"
          autoCorrect="off"
        />
        <input type="submit" tabIndex="-2" value="5" />
        <input type="button" tabIndex="-3" value="X" />
      </form>
    </div>
  );
}

export default input;

