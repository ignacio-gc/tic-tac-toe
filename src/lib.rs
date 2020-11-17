use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
extern crate console_error_panic_hook;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Debug, PartialEq, Clone, Copy, Serialize, Deserialize)]
pub enum Square {
    Null,
    X,
    O,
}

#[derive(Serialize, Deserialize)]
pub struct Game {
    pub board: Vec<Square>,
}

#[wasm_bindgen]
pub fn initial_state_to_js() -> JsValue {
    let init_state = Game {
        board: vec![Square::X; 9],
    };
    JsValue::from_serde(&init_state).unwrap()
}

#[wasm_bindgen]
pub fn number() -> JsValue {
    JsValue::from_serde(&Square::X).unwrap()
}

fn player(game: &Game) -> Square {
    let mut empty_squares: i8 = 0;
    for e in game.board.iter() {
        if *e == Square::Null {
            empty_squares += 1;
        }
    }
    if empty_squares % 2 != 0 {
        Square::X
    } else {
        Square::O
    }
}

// Returns set of all possible actions (i, j) available on the board.
fn actions(game: &Game) -> Vec<usize> {
    let mut actions = Vec::new();

    for (idx, e) in game.board.iter().enumerate() {
        if *e == Square::Null {
            actions.push(idx);
        }
    }
    actions
}

// Returns the board that results from making mov (i, j) on the board.
fn result(game: &Game, action: usize) -> Result<Game, String> {
    if game.board[action] != Square::Null {
        Err(String::from("ValueError"))
    } else {
        let mut new_game = Game {
            board: game.board.clone(),
        };
        new_game.board[action] = player(game);
        Ok(new_game)
    }
}

// Returns the winner of the game, if there is one.
fn winner(game: &Game) -> Option<Square> {
    let winner_combinations: [[usize; 3]; 8] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for &line in winner_combinations.iter() {
        let [a, b, c] = line;

        if game.board[a] != Square::Null
            && game.board[a] == game.board[b]
            && game.board[a] == game.board[c]
        {
            return Some(game.board[a]);
        }
    }

    None
}

// Returns True if game is over, False otherwise.
fn terminal(game: &Game) -> bool {
    if winner(&game) != None || !game.board.iter().any(|&x| x == Square::Null) {
        return true;
    } else {
        return false;
    }
}

// Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
fn utility(board: &Game) -> i64 {
    match winner(board) {
        Some(Square::X) => 1,
        Some(Square::O) => -1,
        _ => 0,
    }
}

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

#[wasm_bindgen]
pub fn solve(board: &JsValue) -> usize {
    let game: Game = Game {
        board: board.into_serde().unwrap(),
    };

    minimax(&game).unwrap()
}
