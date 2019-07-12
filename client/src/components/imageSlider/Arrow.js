import React from 'react';

const Arrow = ({ direction, clickFunction }) => {
  return <div className={`slide-arrow ${direction}`} onClick={clickFunction} />;
};

export default Arrow;
