import { useState } from 'react';
import { TURNS } from './logic/constants';
import { checkWinnerFrom } from './board.js';
import { WinnerModal } from './components/WinnerModal';
import { TurnInfo } from './components/TurnInfo';
import confetti from 'canvas-confetti';
import { GridGame } from './components/GridGame';

import './App.css'

function App() {

  // estado para manejar el tablero
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });

  // estado para manejar el turno
  const [turn, setTurn] = useState(()=> {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;    
  }
);

  // null es que no hay ganador, false es empate
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    if (localStorage.getItem('board'))
      localStorage.removeItem('board');

    if (localStorage.getItem('turn'))
      localStorage.removeItem('turn');

  }

  const updateBoard = (index) => {

    // si ya existe algo en la posicion no hacemos nada
    if (board[index] || winner) return;

    // actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    window.localStorage.setItem('board', JSON.stringify(newBoard));

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    window.localStorage.setItem('turn', newTurn);

    // guardar en el localstorage el tablero y el turn

    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      setWinner(newWinner); // la actualizacion del estado es asincrono
      confetti();
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>

      <GridGame board={board} updateBoard={updateBoard} />
      <TurnInfo turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
};

export default App;
