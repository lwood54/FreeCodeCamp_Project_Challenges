import React from 'react';

const Square = props => {
  return (
    <div className="col s4 gameBoxCont">
      <h2
        className={
          props.tie
            ? 'card gameBox center-align amber lighten-3'
            : `card gameBox center-align ${props.className}`
        }
        id={props.box}
        onClick={props.handleClick}
      >
        <div className="xoContainer">{props.clickVal}</div>
      </h2>
    </div>
  );
};

export default Square;
