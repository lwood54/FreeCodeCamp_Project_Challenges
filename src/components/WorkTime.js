import React from 'react';

const WorkTime = props => {
  return (
    <div className="worktimeDiv col s6 right center-align">
      <button
        className="subBtn btn-small blue accent-3"
        onClick={props.subtractWorkTime}
      >
        -
      </button>
      <h3 className="center-align workTimeDisp">{props.workTime}</h3>
      <button
        className="addBtn btn-small blue accent-3"
        onClick={props.addWorkTime}
      >
        +
      </button>
    </div>
  );
};

export default WorkTime;
