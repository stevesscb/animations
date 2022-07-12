import React from 'react';

import classes from './Board.module.css';

// when rotation is 0, return null
// to prevent triggering rotate0 animation
// because animation is 270 to 0
// hence it would be weird
const matchRotationClass = (rotation) => {
  if (rotation === 0) return '';

  switch (rotation % 4) {
    case 1:
      return classes.rotate90;
    case 2:
      return classes.rotate180;
    case 3:
      return classes.rotate270;
    default:
      return classes.rotate0;
  }
};

const Board = (props) => {
  return (
    <div className={`${classes.board} ${matchRotationClass(props.rotation)}`}>
      {props.board.map((row, rowIndex) => {
        return (
          <div className={classes.row} key={rowIndex}>
            {row.map((column, columnIndex) => {
              const dark =
                rowIndex % 2 === 0
                  ? columnIndex % 2 === 0
                  : columnIndex % 2 !== 0;

              const cellClass = `${classes.column} ${
                dark ? classes.dark : classes.white
              }`;

              return <div className={cellClass} key={columnIndex} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
