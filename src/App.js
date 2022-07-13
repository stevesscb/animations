import React, { useState } from 'react';

import Card from './components/UI/Card';
import RotateBoardButton from './components/UI/RotateBoardButton';
import BoardSizeInput from './components/UI/BoardSizeInput';
import Board from './components/UI/Board';
import Cards from './components/UI/Cards';

function App() {
  const [showBoard, setShowBoard] = useState(false);
  const [board, setBoard] = useState([]);
  const [rotation, setRotation] = useState(0);
  const [disableRotation, setDisableRotation] = useState(null);

  // function to dynamically add animation class
  // to board transform board
  // 1 means 90deg, 2 means 180deg, ...etc
  // during animation, disable rotate button
  const handleRotateBoard = () => {
    setRotation(rotation + 1);
    setDisableRotation(true);
    setTimeout(() => {
      setDisableRotation(false);
    }, 1000);
  };

  // receives size from input
  // use size to generate 2D array grid
  const handleBoardInputSubmit = (size) => {
    setShowBoard(true);
    setBoard(new Array(size).fill(new Array(size).fill(null)));
  };

  return (
    <>
      <Card />
      {showBoard ? (
        <>
          <Cards />
          <RotateBoardButton
            onClick={handleRotateBoard}
            disable={disableRotation}
          />
          <Board board={board} rotation={rotation} />
        </>
      ) : (
        <BoardSizeInput onSubmit={handleBoardInputSubmit} />
      )}
    </>
  );
}

export default App;
