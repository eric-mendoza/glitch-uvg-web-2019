import React from 'react';
import Title from './title';
import Robot from './Robot';
import DataInfo from './DataInfo';
import DiscButton from './button-dist';

require('./cuadro.css');

export default function Cuadro() {
  return (
    <div className="cuadro">
      <div className="imagen">
        <Robot />
        <Title />
        <DataInfo />
        <DiscButton />
      </div>
    </div>
  );
}
