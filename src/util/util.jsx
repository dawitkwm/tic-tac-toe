export function calculateWinner(tiles) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return tiles[a];
    }
  }
  return null;
}

export function calculateTie(tiles) {
  for (let i = 0; i < tiles.length; i++) {
    if (!tiles[i]) {
      return false;
    }
  }
  return true;
}

// works with tic-tac-toe game of any size
export function genericWinnerCalculator(tiles) {
  const boardSize = tiles.length;
  const boardDim = Math.round(Math.sqrt(boardSize));

  let winner, step, end;
  let i = 0;
  while (i < boardDim) {
    if (i === 0) {
      // first element in first row: rightward-diagonal
      step = boardDim + 1;
      end = boardSize;
    } else if (i === boardDim - 1) {
      //last element in first row: leftward-diagonal
      step = boardDim - 1;
      end = boardSize - boardDim + 1;
    }
    //rightward-diagonal from first element or leftward-diagonal from last element of first row
    winner = checkWinner(tiles, i, step, end);
    if (winner) {
      return winner;
    }
    //bottomward-vertical
    winner = checkWinner(tiles, i, boardDim, boardSize - boardDim + i + 1);
    if (winner) {
      return winner;
    }
    ++i;
  }
  //rightward-horizontal
  i = 0;
  while (i <= boardSize - boardDim) {
    winner = checkWinner(tiles, i, 1, i + boardDim);
    if (winner) {
      return winner;
    }
    i += boardDim;
  }
  return null;
}

function checkWinner(tiles, start, step, end) {
  const mark = tiles[start];
  if (mark === null) {
    return null;
  }
  let j = start + step;
  while (j < end) {
    if (tiles[j] !== mark) {
      break;
    }
    j += step;
  }
  if (j >= end) {
    return mark;
  }
  return null;
}
