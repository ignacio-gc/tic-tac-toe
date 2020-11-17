use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[derive(Debug, PartialEq, Clone, Copy)]
enum Square {
    Empty,
    X,
    O,
}

type Board = Vec<Square>;

fn initial_state() -> Board {
    let init_state: Board = vec![Square::Empty; 9];
    init_state
}

fn player(board: &Board) -> Square {
    let mut count: i8 = 0;
    for e in board.iter() {
        if *e == Square::Empty {
            count += 1;
        }
    }
    if count % 2 != 0 {
        Square::X
    } else {
        Square::O
    }
}

// Returns set of all possible actions (i, j) available on the board.
fn actions(board: &Board) -> Vec<usize> {
    let mut actions = Vec::new();

    for (idx, e) in board.iter().enumerate() {
        if *e == Square::Empty {
            actions.push(idx);
        }
    }
    actions
}

// Returns the board that results from making move (i, j) on the board.
fn result(board: &Board, action: usize) -> Result<Board, String> {
    if board[action] != Square::Empty {
        Err(String::from("ValueError"))
    } else {
        let mut new_board = board.clone();
        new_board[action] = player(&new_board);
        Ok(new_board)
    }
}

// Returns the winner of the game, if there is one.
fn winner(board: &Board) -> Option<Square> {
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

        if board[a] != Square::Empty && board[a] == board[b] && board[a] == board[c] {
            return Some(board[a]);
        }
    }
    None
}

// Returns True if game is over, False otherwise.
fn terminal(board: &Board) -> bool {
    if winner(&board) != None || !board.iter().any(|&x| x == Square::Empty) {
        return true;
    } else {
        return false;
    }
}

// Returns 1 if X has won the game, -1 if O has won, 0 otherwise.
fn utility(board: &Board) -> i64 {
    match winner(board) {
        Some(Square::X) => 1,
        Some(Square::O) => -1,
        _ => 0,
    }
}

// Check if board is empty.
fn board_is_empty(board: &Board) -> bool {
    for e in board.iter() {
        if *e != Square::Empty {
            return false;
        }
    }
    true
}

// Returns the max value "v"
fn max_val(board: &Board, mut alpha: i64, beta: i64) -> i64 {
    if terminal(&board) {
        return utility(&board);
    }
    let mut v = i64::MIN;
    for action in actions(board) {
        let min_utility = min_val(&result(board, action).unwrap(), alpha, beta);
        v = *vec![v, min_utility, alpha, beta].iter().max().unwrap();
        alpha = v.max(alpha);
        if alpha >= beta {
            return v;
        }
    }
    v
}

// Returns the min value "v"
fn min_val(board: &Board, alpha: i64, mut beta: i64) -> i64 {
    if terminal(&board) {
        return utility(&board);
    }
    let mut v = i64::MAX;
    for action in actions(board) {
        let min_utility = max_val(&result(board, action).unwrap(), alpha, beta);
        v = *vec![v, min_utility, alpha, beta].iter().min().unwrap();
        beta = v.min(beta);
        if alpha >= beta {
            return v;
        }
    }
    v
}

//  Returns the optimal action for the current player on the board.
#[wasm_bindgen]
pub fn best(board: Vec<usize>) -> Option<usize> {
    let mut rust_board: Vec<Square> = Vec::new();
    for t in board {
        if t == 0 {
            rust_board.push(Square::Empty)
        } else if t == 1 {
            rust_board.push(Square::O)
        } else {
            rust_board.push(Square::X)
        };
    }
   
    minimax(&rust_board)
}

fn minimax(board: &Board) -> Option<usize> {
    if terminal(board) {
        return None;
    }

    let mut best_action: usize = 2;

    match player(board) {
        Square::X => {
            println!("jugador X");
            let mut max_v = -10000;
            for action in actions(board) {
                //println!("action: {:?}", action);
                let next_board = result(board, action).unwrap();
                if winner(&next_board) == Some(Square::X) {
                    return Some(action);
                }
                let v = min_val(&next_board, -10000, 10000);
                //println!("best action: {:?} v: {}", best_action, v);
                if v > max_v {
                    best_action = action;
                    max_v = v;
                }
            }
        }
        Square::O => {
            println!("jugador O");
            let mut min_v = 10000;
            for action in actions(board) {
                let next_board = result(board, action).unwrap();
                if winner(&next_board) == Some(Square::O) {
                    return Some(action);
                }
                let v = max_val(&next_board, -10000, 10000);
                if v < min_v {
                    best_action = action;
                    min_v = v;
                }
            }
        }
        Square::Empty => (),
    }
    Some(best_action)
}
