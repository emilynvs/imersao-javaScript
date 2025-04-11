let round = 1
let userChoice = null;
let textRound = document.getElementById('round');
let rest = document.getElementById('restart');
let gameNow = document.getElementById('game');
let changes = document.getElementById('changes');

function start() {
    document.getElementById('initial').style.display = 'none'
    gameNow.style.display = 'block';
    rest.style.display = 'none';
}

function randomGlass() {
    let num = Math.floor((Math.random() * 3) + 1)
    return num
}

function choice(button) {
    userChoice = button.value
    playRound()
}

function playRound(){
    let computerChoice = randomGlass();
    if(userChoice == computerChoice){
        textRound.innerText = "You lose!";
        changes.style.display = 'none';
        rest.style.display = 'block'
        return;
    }
    round++;
    if(round>3){
        textRound.innerText = "YOU WIN!";
        changes.style.display = 'none';
        rest.style.display = 'block';
        return;
    }
    textRound.innerText = "Round " + round
}

function restart(){
    round = 1;
    userChoice = null
    textRound.innerText = "Round " + round
    changes.style.display = 'block';
    rest.style.display = 'none';
    start()
}
