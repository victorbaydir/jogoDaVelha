const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click', clickCell);
});

function clickCell(event) {
    currentPlayer = 'X';
    event.target.innerText = 'X';
    if(isVitoria()) {
        console.log("A");
        alert('Parabéns, você venceu!');
        resetarJogo();
    } else if(isTudoPreenchido()) {
        alert('Houve um empate!');
        resetarJogo();
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; /** Troca o player pra verificar a vitoria do pc ou do user */
        jogadaComputador();
    }
}

function jogadaComputador() {
    let emptyCells = Array.from(cells).filter(cell => cell.textContent === '');
    let indexRandomico = Math.floor(Math.random() * emptyCells.length); /** Math.random() retorna um numero randomico entre 0 e 1 */
    let computerCell = emptyCells[indexRandomico];

    computerCell.textContent = 'O';
    if(isVitoria()) {
        alert('O Computador venceu!');
        resetarJogo();
    }
}

function isVitoria() {

    
    const possiveisVitorias = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
   
    return possiveisVitorias.some(combinacao => {
        return combinacao.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

function isTudoPreenchido() {
    return Array.from(cells).every(cell => {
        cell.textContent != '';
    });
}

function resetarJogo() {
    for(i = 0; cells.length; i++) {
        cells[i].textContent = '';
    }
}