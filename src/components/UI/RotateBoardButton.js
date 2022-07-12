import React from 'react';

import classes from './RotateBoardButton.module.css';

const RotateBoardButton = (props) => {
  return (
    <div className={classes.container}>
      <button
        className={classes.button}
        onClick={props.onClick}
        disabled={props.disable}
      >
        ROTATE
      </button>
    </div>
  );
};

export default RotateBoardButton;
