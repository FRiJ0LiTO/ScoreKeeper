const player1 = {
    score: 0,
    button: document.querySelector('#player-1-btn'),
    display: document.querySelector('#player-1')
}

const player2 = {
    score: 0,
    button: document.querySelector('#player-2-btn'),
    display: document.querySelector('#player-2')
}

// Opciones de puntuación máxima para el juego
const options = document.querySelector('#options-match');

// Botón de reset
const resetScore = document.querySelector('#reset-btn')

let isGameOver = false;
let winningScore = 3;

const updateScore = (player, opponent) => {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }

}

const reset = () => {
    isGameOver = false;
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.textContent = 0;
        // Reseteamos las clases de los marcadores para que no se queden en rojo ni verde
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
};

player1.button.addEventListener('click', function () {
    updateScore(player1, player2)
})

player2.button.addEventListener('click', function () {
    updateScore(player2, player1)
})

options.addEventListener('change', () => {
    console.log(options.value);
    winningScore = parseInt(options.value);
    // Reseteamos el marcador cuando se cambia el valor de winningScore
    reset();
})

resetScore.addEventListener('click', function () {
    reset();
})

