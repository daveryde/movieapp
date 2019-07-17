import React from 'react';

const Arrow = ({ direction, clickFunction }) => {
  return <div className='arrow-directional' onClick={clickFunction} />;
};

export default Arrow;
