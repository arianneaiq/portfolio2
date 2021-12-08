document.getElementById("start").addEventListener('click', start);

let choiceImage= new Array();
        choiceImage[0] = new Image();
        choiceImage[0].src = 'img/Rock.png';
        choiceImage[0].name = 'Rock';

        choiceImage[1] = new Image();
        choiceImage[1].src = 'img/paper.png';
        choiceImage[1].name ='Paper';

        choiceImage[2] = new Image();
        choiceImage[2].src = 'img/scissors.png';
        choiceImage[2].name = 'Scissors'

function start() {
    document.getElementById("img").src = "";

    let myLet;
    myLet = setTimeout(start1, 1000);
    myLet = setTimeout(start2, 2000);
    myLet = setTimeout(start3, 3000);
    myLet = setTimeout(start4, 4000);

    function start1() {
        document.getElementById("demo").innerHTML = "Rock";
    }

    function start2() {
        document.getElementById("demo").innerHTML = "Paper";
    }

    function start3() {
        document.getElementById("demo").innerHTML = "Scissors";
    }

    function start4() {
        let rnm = choiceImage[Math.floor(Math.random() * choiceImage.length)];
        document.getElementById("demo").innerHTML = "";
        document.getElementById("img").src = rnm.src;
    }
}

let rnm1;
let rnm2;
let rnm1Image;
let rnm2Image;

document.getElementById("player1").addEventListener('click', player1);

document.getElementById("player2").setAttribute("disabled", "true");

function player1() {
   /* document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    rnm1 = choice[Math.floor(Math.random() * choice.length)]; */
    reset();
    rnm1Image = choiceImage[Math.floor(Math.random() * choiceImage.length)]; 
    document.getElementById("demo1").innerHTML = "Player 1: " + rnm1Image.name ;
    document.getElementById("imgPlayer1").src = rnm1Image.src;
    document.getElementById("player1").setAttribute("disabled", "true");
    document.getElementById("player2").removeAttribute("disabled", "true");
}

document.getElementById("player2").addEventListener('click', player2);


function player2() {
   // rnm2 = choice[Math.floor(Math.random() * choice.reverse().length)];
    rnm2Image = choiceImage[Math.floor(Math.random() * choiceImage.length)]; 
    document.getElementById("demo2").innerHTML = "Player 2: " + rnm2Image.name ;
    document.getElementById("imgPlayer2").src = rnm2Image.src;
    document.getElementById("player1").removeAttribute("disabled", "true");
    document.getElementById("player2").setAttribute("disabled", "true");
    decideWinner();
    
}

function reset() {
    document.getElementById("imgPlayer1").src = "";
    document.getElementById("imgPlayer2").src = "";
    document.getElementById("demo1").innerHTML = "";
    document.getElementById("demo2").innerHTML = "";
    document.getElementById("win-lose").src = "";
}

let winner1 = new Image();
winner1.src = 'img/winner-1.png';

let winner2 = new Image();
winner2.src = 'img/winner-2.png';

let playAgain = new Image();
playAgain.src = 'img/PlayAgain.png'


function decideWinner() {
    if (rnm1Image === choiceImage[0] && rnm2Image === choiceImage[2]) {
        //document.getElementById("win-lose").innerHTML = "Winner: Player 1";
        document.getElementById("win-lose").src = winner1.src;
    } 
    else if (rnm1Image === choiceImage[0] && rnm2Image === choiceImage[1]) {
        //document.getElementById("win-lose").innerHTML = "Winner: Player 2";
        document.getElementById("win-lose").src = winner2.src;
    } 
    else if (rnm1Image === choiceImage[1] && rnm2Image === choiceImage[0] ) {
        //document.getElementById("win-lose").innerHTML = "Winner: Player 1";
        document.getElementById("win-lose").src = winner1.src;
    }
    else if (rnm1Image === choiceImage[1] && rnm2Image === choiceImage[2]) {
       // document.getElementById("win-lose").innerHTML = "Winner: Player 2";
        document.getElementById("win-lose").src = winner2.src;
    } 
    else if (rnm1Image === choiceImage[2] && rnm2Image === choiceImage[0]) {
       // document.getElementById("win-lose").innerHTML = "Winner: Player 2";
        document.getElementById("win-lose").src = winner1.src;
    } 
    else if (rnm1Image === choiceImage[2] && rnm2Image === choiceImage[1]) {
        //document.getElementById("win-lose").innerHTML = "Winner: Player 1";
        document.getElementById("win-lose").src = winner1.src;
    } 
    else if (rnm1Image == rnm2Image) {
        document.getElementById("win-lose").innerHTML = "Play Again";
        document.getElementById("win-lose").src = playAgain.src;
    }
}



