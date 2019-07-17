import React from 'react';

const Arrow = ({ direction, clickFunction }) => {
  return (
    <div onClick={clickFunction}>
      <i className={`fa-2x far fa-hand-point-${direction}`} />
    </div>
  );
};

export default Arrow;
