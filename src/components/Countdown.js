import React from 'react';

const Countdown = props => {
  let minLeft = props.minLeft >= 10 ? props.minLeft : '0' + props.minLeft;
  let secLeft = props.secLeft >= 10 ? props.secLeft : '0' + props.secLeft;
  if (document.getElementById('tabTitle')) {
    document.getElementById('tabTitle').innerHTML = `${minLeft}:${secLeft}`;
  }
  return (
    <div className="countdownDiv center-align">
      <h2 className="instruct">
        {props.inSession ? 'Work time!' : 'Break time!'}
      </h2>
      <h1 className="timer" onClick={props.togglePause}>
        {props.minLeft >= 10 ? props.minLeft : '0' + props.minLeft} :
        {props.secLeft >= 10 ? props.secLeft : '0' + props.secLeft}
      </h1>
    </div>
  );
};

export default Countdown;
