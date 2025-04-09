function start() {
    document.getElementById('initiation').style.display = 'none';
    document.getElementById('info').style.display = 'block';
}

function send() {
    var age = document.getElementById('age').value;
    document.getElementById('info').style.display = 'none';
    if (age >= 18) {
        riggedGame('block', '.game')  
        theGame();
    } else {
        riggedGame('block', '.underage')
    }
}

function riggedGame(show, part){
    if(show == 'block' && part == '.game'){
        theGame()
    }
    var game = document.querySelectorAll(part);
        game.forEach(function (element) {
            element.style.display = show;
        });
}

function randomChoice(){
    let list = ['stone', 'paper', 'scissors'];
    let num = Math.floor(Math.random() * 3);
    let computerChoice = list[num]
    return computerChoice;
}

function theGame() {
    const buttons = document.querySelectorAll('#btns .btn');
    computerChoice = randomChoice()
    let msg = ''
    let victory = "YOU WIN :D"
    let lose = "You lost :("
    let draw = "Is a draw :O"
    let choice;
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            choice = button.value;
            if (choice == 'paper') {
                if (computerChoice == 'stone') {
                    msg = victory;
                } else if (computerChoice == 'paper') {
                    msg = draw;
                } else {
                    msg = lose;
                }
            }
            if (choice == 'stone') {
                if (computerChoice == 'scissors') {
                    msg = victory;
                } else if (computerChoice == 'stone') {
                    msg = draw;
                } else {
                    msg = lose;
                }
            }
            if (choice == 'scissors') {
                if (computerChoice == 'paper') {
                    msg = victory;
                } else if (computerChoice == 'scissors') {
                    msg = draw;
                } else {
                    msg = lose;
                }
            }

            riggedGame('none', '.game')
            document.getElementById('answer').style.display = 'block';
            resposta = msg + "\nYou chose: " + choice + "\nThe computer chose: " + computerChoice;
            document.getElementById('result').innerText = resposta;
        });
    })

};

function back() {
    const buttons = document.querySelectorAll('.btnsAction');

    buttons.forEach(button => {
    button.addEventListener('click', function () {
        btnValue = button.value;
        if (btnValue == 'btnAnswer') {
            document.getElementById('answer').style.display = 'none'
            riggedGame('block', '.game')
        }

        if (btnValue == 'btnUnderage') {
            riggedGame('none', '.underage')
            document.getElementById('info').style.display='block'  
        }

        if(btnValue =='btnGame'){
            riggedGame('none', '.game')
            document.getElementById('info').style.display='block'  

        }
    });
});
}