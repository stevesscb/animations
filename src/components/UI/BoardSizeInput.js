import React, { useState } from 'react';

import classes from './BoardSizeInput.module.css';

const BoardSizeInput = (props) => {
  const [size, setSize] = useState(0);
  const [error, setError] = useState('');

  const validateSize = (rawSize) => {
    let newError = '';

    if (!rawSize || rawSize < 4 || rawSize > 12) {
      newError = 'Please enter a value between 4 and 12';
    }

    setError(newError);
    return !newError;
  };

  // extract value from event and update size value
  const handleChange = (event) => {
    setSize(Number(event.target.value));
  };

  // check value with validateSize function
  // if validation passed, lift size state to parent
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateSize(size)) {
      props.onSubmit(size);
    }
  };

  return (
    <div className={classes.container}>
      <form className={classes.input} onSubmit={handleSubmit}>
        <label htmlFor='username'>Board size:</label>
        <div className={classes.helpText}>Enter value between 4 - 12</div>
        <input
          id='size'
          className={error ? classes.hasError : ''}
          type='number'
          onChange={handleChange}
        />
        {error && <div className={classes.errorText}>{error}</div>}
        <div className={classes.buttonWrapper}>
          <button className={classes.button}>ENTER</button>
        </div>
      </form>
    </div>
  );
};

export default BoardSizeInput;
