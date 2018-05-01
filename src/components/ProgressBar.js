import React from 'react';

const ProgressBar = props => {
  return (
    <div>
      <div className="progress blue accent-1">
        <div className={props.cName} style={props.style} />
      </div>
    </div>
  );
};

export default ProgressBar;
