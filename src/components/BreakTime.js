import React from 'react';

const BreakTime = props => {
  return (
    <div className="breaktimeDiv col s6 left center-align">
      <button
        className=" subBtn btn-small blue accent-3"
        onClick={props.subtractBreakTime}
      >
        -
      </button>
      <h3 className="brkTimeDisp center-align">{props.breakTime}</h3>
      <button
        className=" addBtn btn-small blue accent-3"
        onClick={props.addBreakTime}
      >
        +
      </button>
    </div>
  );
};

export default BreakTime;
