import dynamic from 'next/dynamic'
import Board from './board'
import { useState, useEffect } from 'react'
import styles from './game.module.css'

const Game = dynamic({
  loader: async () => {
    const rustModule = await import('../pkg')

    return (
      (props) => {
        const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
        const [stepNumber, setStepNumber] = useState(0);
        const [xIsNext, setXIsNext] = useState(true);
        const [status, setStatus] = useState("");

        const handleClick = (i) => {
          const hist = history.slice(0, stepNumber + 1);
          const current = hist[hist.length - 1];
          const squares = current.squares.slice();
          if (calculateWinner(squares) || squares[i]) {
            return;
          }

          squares[i] = xIsNext ? "X" : "O";

          // set the computer move
          if (hist.length < 5) {
            const squares_to_rust = squares.map((n) => n === null ? String(n) : n)
            const move = rustModule.solve(squares_to_rust)
            squares[move] = !xIsNext ? "X" : "O";
          }

          setHistory(hist.concat([{ squares }]));
          setStepNumber(hist.length);
        }

        const jumpTo = (step) => {
          setStepNumber(step);
        }


        const moves = history.map((step, move) => {
          const desc = move ?
            'Ir a jugada #' + move :
            'Inicio';
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        });

        let current = history[stepNumber];
        let winner = calculateWinner(current.squares);
        useEffect(() => {
          current = history[stepNumber];
          winner = calculateWinner(current.squares);

          if (winner) {
            setStatus("Ganador: " + winner);
          } else {
            setStatus("Siguiente jugador: " + (xIsNext ? "X" : "O"));
          }

        });

        const changePlayer = () => {
          if (stepNumber === 0) {
            setXIsNext(!xIsNext);
          }
        }

        return (
          <div className={styles.game}>
            <div>
              <Board
                squares={current.squares}
                onClick={i => handleClick(i)}
              />
            </div>
            <div className={styles.gameInfo}>
              <label className={styles.switch}>
                <span className={styles.checkbox}>
                  Jugar como X? <input type="checkbox" checked={xIsNext} onChange={() => changePlayer()} />
                </span>
              </label>
              <div className={styles.status}>{status}</div>
              <div className={styles.moves}>
                <ol>{moves}</ol>
              </div>
            </div>
          </div>
        );
      })
  },
})

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game