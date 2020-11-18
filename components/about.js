import styles from './about.module.css'
import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-rust'


const About = () => {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const minimaxCode = 
  `
   //  Returns the optimal action for the current player on the board.
   fn minimax(game: &Game) -> Option<usize> {
    if terminal(game) {
        return None;
    }

    let mut best_action: usize = 2;

    match player(game) {
        Square::X => {
            let mut max_v = i64::MIN;
            for action in actions(game) {
                let next_board = result(game, action).unwrap();
                if winner(&next_board) == Some(Square::X) {
                    return Some(action);
                }
                let v = min_val(&next_board, i64::MIN, i64::MAX);
                if v > max_v {
                    best_action = action;
                    max_v = v;
                }
            }
        }
        Square::O => {
            let mut min_v = i64::MAX;
            for action in actions(game) {
                let next_board = result(game, action).unwrap();
                if winner(&next_board) == Some(Square::O) {
                    return Some(action);
                }
                let v = max_val(&next_board, i64::MIN, i64::MAX);
                if v < min_v {
                    best_action = action;
                    min_v = v;
                }
            }
        }
        Square::Null => (),
    }

    Some(best_action)
}

// Returns the max value "v"
fn max_val(game: &Game, mut alpha: i64, beta: i64) -> i64 {
    if terminal(&game) {
        return utility(&game);
    }
    let mut v = i64::MIN;
    for action in actions(game) {
        v = v.max(min_val(&result(game, action).unwrap(), alpha, beta));
        alpha = v.max(alpha);
        if alpha >= beta {
            break;
        }
    }

    v
}

// Returns the min value "v"
fn min_val(game: &Game, alpha: i64, mut beta: i64) -> i64 {
    if terminal(&game) {
        return utility(&game);
    }
    let mut v = i64::MAX;
    for action in actions(game) {
        v = v.min(max_val(&result(&game, action).unwrap(), alpha, beta));
        beta = v.min(beta);
        if alpha >= beta {
            break;
        }
    }

    v
}
  `

  return (
    <>
      <div className={styles.text}>
        Las respuestas automáticas en el TA-TE-TI de arriba están generadas en base al algorítmo <a href="https://es.wikipedia.org/wiki/Minimax" target="_">minimax</a>.
        Como dice Wikipedia "minimax es un método de decisión para minimizar la pérdida máxima esperada en juegos con adversario y con información perfecta".
      </div>
      <div className={styles.text}>
        La implementación está hecha en Rust y compilado a Webassembly con wasm-pack. La página web está hecha en Next.js.
      </div>
      <div className={styles.text}>
        Cada vez que uno hace una jugada el programa responde de manera óptima llamando a la siguiente función <code>minimax</code>:
      </div>
      <div className={styles.text}>
        <pre className={styles.codeBlock}><code className="language-rust">{minimaxCode}</code></pre>
      </div>
    </>
  )
}

export default About