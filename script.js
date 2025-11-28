// elements of DOM
let btnStart = document.getElementById('btn-start')
let modal = document.querySelector('.modal');
let board = document.querySelector('.board');
let darkInput = document.getElementById('dark-theme');
let playerSpace = document.querySelector('.player-space.player')
let computerSpace = document.querySelector('.player-space.computer')
let gameSpace = document.querySelector('.game-space');
let showTurn = document.getElementById('turn')
let buySpace = document.getElementById('block-buy');
let buyCount = document.getElementById('buy-left');
let containerWin = document.querySelector('.container-win');
let winIndicator = document.getElementById('win-indicator');
let pointsIndicator = document.getElementById('points-indicator');
let btnRestart = document.getElementById('btn-restart')
let computerPointsSpace = document.getElementById('computer-points');
let playerPointsSpace = document.getElementById('player-points');

// pure variables to be used
// arrays for dominos
let domino = [
    {
        front: 0, back: 0, rotate: false, image: 'assets/0-0.png'
    }, {
        front: 0, back: 1, rotate: false, image: 'assets/0-1.png'
    }, {
        front: 0, back: 2, rotate: false, image: 'assets/0-2.png'
    }, {
        front: 0, back: 3, rotate: false, image: 'assets/0-3.png'
    }, {
        front: 0, back: 4, rotate: false, image: 'assets/0-4.png'
    }, {
        front: 0, back: 5, rotate: false, image: 'assets/0-5.png'
    }, {
        front: 0, back: 6, rotate: false, image: 'assets/0-6.png'
    }, {
        front: 1, back: 1, rotate: false, image: 'assets/1-1.png'
    }, {
        front: 1, back: 2, rotate: false, image: 'assets/1-2.png'
    }, {
        front: 1, back: 3, rotate: false, image: 'assets/1-3.png'
    }, {
        front: 1, back: 4, rotate: false, image: 'assets/1-4.png'
    }, {
        front: 1, back: 5, rotate: false, image: 'assets/1-5.png'
    }, {
        front: 1, back: 6, rotate: false, image: 'assets/1-6.png'
    }, {
        front: 2, back: 2, rotate: false, image: 'assets/2-2.png'
    }, {
        front: 2, back: 3, rotate: false, image: 'assets/2-3.png'
    }, {
        front: 2, back: 4, rotate: false, image: 'assets/2-4.png'
    }, {
        front: 2, back: 5, rotate: false, image: 'assets/2-5.png'
    }, {
        front: 2, back: 6, rotate: false, image: 'assets/2-6.png'
    }, {
        front: 3, back: 3, rotate: false, image: 'assets/3-3.png'
    }, {
        front: 3, back: 4, rotate: false, image: 'assets/3-4.png'
    }, {
        front: 3, back: 5, rotate: false, image: 'assets/3-5.png'
    }, {
        front: 3, back: 6, rotate: false, image: 'assets/3-6.png'
    }, {
        front: 4, back: 4, rotate: false, image: 'assets/4-4.png'
    }, {
        front: 4, back: 5, rotate: false, image: 'assets/4-5.png'
    }, {
        front: 4, back: 6, rotate: false, image: 'assets/4-6.png'
    }, {
        front: 5, back: 5, rotate: false, image: 'assets/5-5.png'
    },
    {
        front: 5, back: 6, rotate: false, image: 'assets/5-6.png'
    },
    {
        front: 6, back: 6, rotate: false, image: 'assets/6-6.png'
    },
]
// pure copy of dominos
let dominoCopy = [
    {
        front: 0, back: 0, rotate: false, image: 'assets/0-0.png'
    }, {
        front: 0, back: 1, rotate: false, image: 'assets/0-1.png'
    }, {
        front: 0, back: 2, rotate: false, image: 'assets/0-2.png'
    }, {
        front: 0, back: 3, rotate: false, image: 'assets/0-3.png'
    }, {
        front: 0, back: 4, rotate: false, image: 'assets/0-4.png'
    }, {
        front: 0, back: 5, rotate: false, image: 'assets/0-5.png'
    }, {
        front: 0, back: 6, rotate: false, image: 'assets/0-6.png'
    }, {
        front: 1, back: 1, rotate: false, image: 'assets/1-1.png'
    }, {
        front: 1, back: 2, rotate: false, image: 'assets/1-2.png'
    }, {
        front: 1, back: 3, rotate: false, image: 'assets/1-3.png'
    }, {
        front: 1, back: 4, rotate: false, image: 'assets/1-4.png'
    }, {
        front: 1, back: 5, rotate: false, image: 'assets/1-5.png'
    }, {
        front: 1, back: 6, rotate: false, image: 'assets/1-6.png'
    }, {
        front: 2, back: 2, rotate: false, image: 'assets/2-2.png'
    }, {
        front: 2, back: 3, rotate: false, image: 'assets/2-3.png'
    }, {
        front: 2, back: 4, rotate: false, image: 'assets/2-4.png'
    }, {
        front: 2, back: 5, rotate: false, image: 'assets/2-5.png'
    }, {
        front: 2, back: 6, rotate: false, image: 'assets/2-6.png'
    }, {
        front: 3, back: 3, rotate: false, image: 'assets/3-3.png'
    }, {
        front: 3, back: 4, rotate: false, image: 'assets/3-4.png'
    }, {
        front: 3, back: 5, rotate: false, image: 'assets/3-5.png'
    }, {
        front: 3, back: 6, rotate: false, image: 'assets/3-6.png'
    }, {
        front: 4, back: 4, rotate: false, image: 'assets/4-4.png'
    }, {
        front: 4, back: 5, rotate: false, image: 'assets/4-5.png'
    }, {
        front: 4, back: 6, rotate: false, image: 'assets/4-6.png'
    }, {
        front: 5, back: 5, rotate: false, image: 'assets/5-5.png'
    },
    {
        front: 5, back: 6, rotate: false, image: 'assets/5-6.png'
    },
    {
        front: 6, back: 6, rotate: false, image: 'assets/6-6.png'
    },
];
// player hand for its pieces
let playerHand = [];
// same for computer
let computerHand = [];
// same for played pieces
let gameHand = [];
// for knowing who player plays
let turn = true;
// variables to see which side has which value
let upper;
let lower;
let computerPoints = 0;
let playerPoints = 0;
let firstGame = true;

// change dark theme on press
darkInput.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('dark')
})
// what to do when start/restart button is pressed
btnStart.addEventListener('click', gameStart)
btnRestart.addEventListener('click', gameStart)
// add event to buy space for user to buy
buySpace.addEventListener('click', () => buyPiece(playerHand))

// what happens when the  game starts
function gameStart() {
    domino = Array.from(dominoCopy);
    gameHand = [];
    playerHand = [];
    computerHand = [];
    modal.classList.add('d-none')
    containerWin.classList.add('d-none')
    board.classList.remove('d-none')
    buySpace.classList.remove('d-none')
    domino.sort((a, b) => Math.random() - .5);
    playerHand = domino.splice(0, 7);
    computerHand = domino.splice(0, 7);
    whoStarts()
    gameRender()
}

// render all variables in the DOM
function gameRender() {
    let r = '';
    gameHand.forEach((piece) => {
        r += '<div class="block">\n' + `<img src="./${piece.image}" class="${piece.rotate && 'rotate-180'}" alt="${piece.front.toString() + ' ' + piece.back.toString()} piece">\n` + '</div>'
    })
    gameSpace.innerHTML = r;
    r = '';
    playerHand.forEach((piece) => {
        r += '<div class="block">\n' + `<img src="./${piece.image}" class="${piece.rotate && 'rotate-180'}" alt="${piece.front.toString() + ' ' + piece.back.toString()} piece">\n` + '</div>'
    })
    playerSpace.innerHTML = r;
    r = '';
    computerHand.forEach((piece) => {
        r += '<div class="block-hidden">\n' + '</div>'
    })
    computerSpace.innerHTML = r;
    r = '';
    showTurn.innerHTML = turn ? 'Você' : 'Computador';
    buyCount.innerHTML = domino.length.toString();
    computerPointsSpace.innerHTML = computerPoints.toString();
    playerPointsSpace.innerHTML = playerPoints.toString();
    if (domino.length === 0) {
        buySpace.classList.add('d-none');
    }
    loadEventListeners()
}

// showing what the computer has
function showComputer() {
    let r = '';
    computerHand.forEach((piece) => {
        r += '<div class="block">\n' + `<img src="./${piece.image}" class="${piece.rotate && 'rotate-180'}" alt="${piece.front.toString() + ' ' + piece.back.toString()} piece">\n` + '</div>'
    })
    computerSpace.innerHTML = '';
    computerSpace.innerHTML = r;
}

// see which player starts
function whoStarts() {
    let tuplasComputer = Math.max(...computerHand.filter(piece => piece.back === piece.front).map(piece => piece.back));
    let tuplasPlayer = Math.max(...playerHand.filter(piece => piece.back === piece.front).map(piece => piece.back));
    if (tuplasComputer > tuplasPlayer) {
        changeTurn();
        return null;
    }
    let biggestPieceValueComputer = Math.max(...computerHand.map(piece => piece.back + piece.front))
    let biggestPieceValuePlayer = Math.max(...playerHand.map(piece => piece.back + piece.front))
    if (biggestPieceValueComputer > biggestPieceValuePlayer) {
        changeTurn();
        return null;
    }
}

// play the selected piece if is valid
function playPiece(hand, piece, index) {
    if (gameHand.length === 0) {
        let piecePlayed = hand.splice(index, 1)[0];
        upper = piecePlayed.front;
        lower = piecePlayed.back;
        gameHand.push(piecePlayed)
        changeTurn()
        return true;
    }
    let possible = isPossible(hand[index]);
    // if the move is sucessful
    if (possible.possible) {
        let piecePlayed = hand.splice(index, 1)[0];
        if (possible.rotate) {
            piecePlayed.rotate = true;
            let frontCopy = piecePlayed.front;
            piecePlayed.front = piecePlayed.back;
            piecePlayed.back = frontCopy;
        }
        if (possible.upper) {
            upper = piecePlayed.front;
            gameHand.unshift(piecePlayed);
        } else {
            lower = piecePlayed.back;
            gameHand.push(piecePlayed)
        }
        changeTurn()
        return true;
    }
    return false;
}

// see if selected piece is valuabe to be inserted in the game, and if should be rotated
function isPossible(piece) {
    let response = {
        rotate: false, possible: false, upper: false,
    }
    if (piece.front === upper || piece.back === lower || piece.front === lower || piece.back === upper) {
        response.possible = true;
        if (piece.back === upper || piece.front === upper) {
            if (piece.front === upper) {
                response.rotate = true;
            }
            response.upper = true;
        } else if (piece.front === lower || piece.back === lower) {
            if (piece.back === lower) {
                response.rotate = true;
            }
        }
    }
    return response;
}

// what happens when is the computer turn
function computerTurn() {
    let hasValidPiece = computerHand.some((piece, index) => {
        return playPiece(computerHand, piece, index)
    })
    if (!hasValidPiece) {
        buyPiece(computerHand);
        computerTurn();
    }
}

// loading click events on player pieces
function loadEventListeners() {
    let pieces = document.querySelectorAll('.player-space.player .block')
    pieces.forEach((piece, index) => {
        piece.addEventListener('click', () => {
            playPiece(playerHand, piece, index);
            gameRender()
        })
    })
}

// buy a piece to the hand parameter
function buyPiece(hand) {
    if (domino.length < 1) {
        return false;
    }
    let pieceToBuy = domino.splice(0, 1)[0];
    hand.push(pieceToBuy);
    gameRender()
}

// see if the game is over or blocked
function isGameOver() {
    return playerHand.length === 0 || computerHand.length === 0;
}

function isGameBlocked() {
    if (domino.length > 0) {
        return false;
    }
    let isPlayerBlocked = playerHand.some(piece => piece.front === lower || piece.back === lower || piece.front === upper || piece.back === upper)
    let isComputerBlocked = computerHand.some(piece => piece.front === lower || piece.back === lower || piece.front === upper || piece.back === upper)
    return isComputerBlocked && isPlayerBlocked;
}

// what happens when the turn changes
function changeTurn() {
    if (isGameOver()) {
        gameOver()
        return null;
    }
    if (isGameBlocked()) {
        console.log('bloqueado')
    }
    turn = !turn;
    if (!turn) {
        computerTurn()
    }
    gameRender()
}

// what happens when the game is over
function gameOver() {
    let loserHand = [];
    containerWin.classList.remove('d-none');
    winIndicator.innerHTML = turn ? 'Você' : 'Computador';
    loserHand = turn ? computerHand : playerHand;
    let total = 0;
    loserHand.forEach(piece => {
        total += piece.front + piece.back
    })
    if (turn) {
        playerPoints += total;
    } else {
        computerPoints += total;
    }
    if (playerPoints >= 50 || computerPoints >= 50) {
        alert('O jogo terminou. Recarregue a página para reiniciar o jogo!')
    }
    pointsIndicator.innerHTML = total;
    showComputer();
}
