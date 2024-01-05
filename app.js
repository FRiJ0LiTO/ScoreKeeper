// Opciones de puntuación máxima para el juego
const options = document.querySelector('#options-match');

// Marcadores de los jugadores (Tabla de puntuaciones)
const firstScore = document.querySelector('#player-1');
const secondScore = document.querySelector('#player-2');

// Botones de los Jugadores
const firstPlayer = document.querySelector('#player-1-btn');
const secondPlayer = document.querySelector('#player-2-btn');

// Botón de reset
const resetScore = document.querySelector('#reset-btn')

let scoreOne = parseInt(firstScore.innerText);
let scoreTwo = parseInt(secondScore.innerText);
let isGameOver = false;
let winningScore = 5;

const reset = () => {
    isGameOver = false;
    scoreOne = 0;
    scoreTwo = 0;
    firstScore.textContent = 0;
    secondScore.textContent = 0;
    // Reseteamos las clases de los marcadores para que no se queden en rojo ni verde
    firstScore.classList.remove('has-text-success', 'has-text-danger');
    secondScore.classList.remove('has-text-success', 'has-text-danger');
    firstPlayer.disabled = false;
    secondPlayer.disabled = false;
};

firstPlayer.addEventListener('click', () => {
    if (!isGameOver) {
        scoreOne++;
        if (scoreOne === winningScore) {
            isGameOver = true;
            // Añadimos las clases de CSS para que se pongan en rojo y verde
            firstScore.classList.add('has-text-success');
            secondScore.classList.add('has-text-danger');
            // Deshabilitamos los botones para que no se pueda seguir sumando puntos
            firstPlayer.disabled = true;
            secondPlayer.disabled = true;
        }
        firstScore.innerText = scoreOne;
    }
})

secondPlayer.addEventListener('click', () => {
    if (!isGameOver) {
        scoreTwo++;
        if (scoreTwo === winningScore) {
            isGameOver = true;
            secondScore.classList.add('has-text-success');
            firstScore.classList.add('has-text-danger');
            firstPlayer.disabled = true;
            secondPlayer.disabled = true;
        }
        secondScore.innerText = scoreTwo;
    }
})

options.addEventListener('change', () => {
    console.log(options.value);
    winningScore = parseInt(options.value);
    // Reseteamos el marcador cuando se cambia el valor de winningScore
    reset();
})

resetScore.addEventListener('click', reset)

