let card = new Array();
card[0] = new Image();
card[0].src = 'cardImg/1h.png';
card[0].value = "1";

card[1] = new Image();
card[1].src = 'cardImg/2h.png';
card[1].value = "2";

card[2] = new Image();
card[2].src = 'cardImg/3h.png';
card[2].value = "3";

card[3] = new Image();
card[3].src = 'cardImg/4h.png';
card[3].value = "4";

card[4] = new Image();
card[4].src = 'cardImg/5h.png';
card[4].value = "5";

card[5] = new Image();
card[5].src = 'cardImg/6h.png';
card[5].value = "6";

card[6] = new Image();
card[6].src = 'cardImg/7h.png';
card[6].value = "7";

card[7] = new Image();
card[7].src = 'cardImg/8h.png';
card[7].value = "8";

card[8] = new Image();
card[8].src = 'cardImg/9h.png';
card[8].value = "9";

card[9] = new Image();
card[9].src = 'cardImg/10h.png';
card[9].value = "10";

card[10] = new Image();
card[10].src = 'cardImg/1b.png';
card[10].value = "1";

card[11] = new Image();
card[11].src = 'cardImg/2b.png';
card[11].value = "2";

card[12] = new Image();
card[12].src = 'cardImg/3b.png';
card[12].value = "3";

card[13] = new Image();
card[13].src = 'cardImg/4b.png';
card[13].value = "4";

card[14] = new Image();
card[14].src = 'cardImg/5b.png';
card[14].value = "5";

card[15] = new Image();
card[15].src = 'cardImg/6b.png';
card[15].value = "6";

card[16] = new Image();
card[16].src = 'cardImg/7b.png';
card[16].value = "7";

card[17] = new Image();
card[17].src = 'cardImg/8b.png';
card[17].value = "8";

card[18] = new Image();
card[18].src = 'cardImg/9b.png';
card[18].value = "9";

card[19] = new Image();
card[19].src = 'cardImg/10b.png';
card[19].value = "10";

card[20] = new Image();
card[20].src = 'cardImg/1p.png';
card[20].value = "1";

card[21] = new Image();
card[21].src = 'cardImg/2p.png';
card[21].value = "2";

card[22] = new Image();
card[22].src = 'cardImg/3p.png';
card[22].value = "3";

card[23] = new Image();
card[23].src = 'cardImg/4p.png';
card[23].value = "4";

card[24] = new Image();
card[24].src = 'cardImg/5p.png';
card[24].value = "5";

card[25] = new Image();
card[25].src = 'cardImg/6p.png';
card[25].value = "6";

card[26] = new Image();
card[26].src = 'cardImg/7p.png';
card[26].value = "7";

card[27] = new Image();
card[27].src = 'cardImg/8p.png';
card[27].value = "8";

card[28] = new Image();
card[28].src = 'cardImg/9p.png';
card[28].value = "9";

card[29] = new Image();
card[29].src = 'cardImg/10p.png';
card[29].value = "10";

card[30] = new Image();
card[30].src = 'cardImg/1r.png';
card[30].value = "1";

card[31] = new Image();
card[31].src = 'cardImg/2r.png';
card[31].value = "2";

card[32] = new Image();
card[32].src = 'cardImg/3r.png';
card[32].value = "3";

card[33] = new Image();
card[33].src = 'cardImg/4r.png';
card[33].value = "4";

card[34] = new Image();
card[34].src = 'cardImg/5r.png';
card[34].value = "5";

card[35] = new Image();
card[35].src = 'cardImg/6r.png';
card[35].value = "6";

card[36] = new Image();
card[36].src = 'cardImg/7r.png';
card[36].value = "7";

card[37] = new Image();
card[37].src = 'cardImg/8r.png';
card[37].value = "8";

card[38] = new Image();
card[38].src = 'cardImg/9r.png';
card[38].value = "9";

card[39] = new Image();
card[39].src = 'cardImg/10r.png';
card[39].value = "10";

/* 1. bij het drukken op het start button komt bij een ieder 10 kaarten (carBack)te voorschijn 
   (er moet 10 randam kaart per persoon opgeslagen worden (gebuikt maken van array om de kaarten op te slaan)). 
   2. bij elke druk op add my card button wordt er een (cardBack)kaart weggehaald 
   (een if else statement gebruiken (aantal kaarten -1))
   en er wordt een kaart van deze 10 kaarten in het midden van de scherm geplaatst.
*/

document.getElementById("startBtn").addEventListener('click', startGame);
Reset();

function Reset() {
    document.getElementById("addCard1").setAttribute("disabled", "true");
    document.getElementById("addCard2").setAttribute("disabled", "true");
    document.getElementById("addCard3").setAttribute("disabled", "true");
    document.getElementById("addCard4").setAttribute("disabled", "true");
    document.getElementById("nextBtn").setAttribute("disabled", "true");
}

let cardBackImg = new Image();
cardBackImg.src = 'cardImg/cardBack.png';

let cardBackDisplay = document.getElementById("cardBackImage");
let cardBackDisplay1 = document.getElementById("cardBackImage1");
let cardBackDisplay2 = document.getElementById("cardBackImage2");
let cardBackDisplay3 = document.getElementById("cardBackImage3");

let length = 10;

function startGame() {
    for (let i = 0; i < length; i++) {
        displayCard(i);
    }

    function displayCard(i) {
        setTimeout(function () {
            cardBackDisplay.innerHTML += "<img src='cardImg/cardBack.png' id='cardBackImage'>";
            cardBackDisplay1.innerHTML += "<img src='cardImg/cardBack.png' id='cardBackImage1'>";
            cardBackDisplay2.innerHTML += "<img src='cardImg/cardBack.png' id='cardBackImage2'>";
            cardBackDisplay3.innerHTML += "<img src='cardImg/cardBack.png' id='cardBackImage3'>";
        }, 100 * i);
    }

    document.getElementById("startBtn").setAttribute("disabled", "true");
    document.getElementById("addCard1").removeAttribute("disabled", "true");
}

/* Array maken van elk player waar een ieder 10 random individuele kaarten krijgt.
 -  Array.push(): add one or more elements to the end of an array and returns the new length of the array.
 -  Array.pop():  removes the last element from an array and returns that element. This method changes the length of the array.
 -  The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements, 
 in the original array(which means the source array is modified)

 Array maken van 10 elements per speler.
 Gebruik maken van Array.push en Math.random () om een random element van de ene array op te slagen in een ander array. 
 Tegerlijkertijd wordt die random element weggehaald d.m.v Array.shift() om te voorkomen dat meedere spelers de zelfde kaarten krijgen.
*/


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Used like so
shuffle(card);
console.log(card);

let player1Card = new Array(10);
player1Card = card.slice(0, 10);
console.log(player1Card);

let player2Card = new Array(10);
player2Card = card.slice(10, 20);
console.log(player2Card);

let player3Card = new Array(10);
player3Card = card.slice(20, 30);
console.log(player3Card);

let player4Card = new Array(10);
player4Card = card.slice(30, 40);
console.log(player4Card);


document.getElementById("addCard1").addEventListener('click', addCard1);
document.getElementById("addCard2").addEventListener('click', addCard2);
document.getElementById("addCard3").addEventListener('click', addCard3);
document.getElementById("addCard4").addEventListener('click', addCard4);
document.getElementById("nextBtn").addEventListener('click', nextRound);

let i = 0;
function addCard1() {
    document.getElementById("card1").src = player1Card[i].src;
    document.getElementById("addCard1").setAttribute("disabled", "true");
    document.getElementById("addCard2").removeAttribute("disabled", "true");
    cardBackDisplay.removeChild(cardBackDisplay.lastChild);
    document.getElementById("demo").innerHTML = i;
}

function addCard2() {
    document.getElementById("card2").src = player2Card[i].src;
    document.getElementById("addCard2").setAttribute("disabled", "true");
    document.getElementById("addCard3").removeAttribute("disabled", "true");
    cardBackDisplay1.removeChild(cardBackDisplay1.lastChild);
}

function addCard3() {
    document.getElementById("card3").src = player3Card[i].src;
    document.getElementById("addCard3").setAttribute("disabled", "true");
    document.getElementById("addCard4").removeAttribute("disabled", "true");
    cardBackDisplay2.removeChild(cardBackDisplay2.lastChild);
}

function addCard4() {
    document.getElementById("card4").src = player4Card[i].src;
    document.getElementById("addCard4").setAttribute("disabled", "true");
    document.getElementById("nextBtn").removeAttribute("disabled", "true");
    cardBackDisplay3.removeChild(cardBackDisplay3.lastChild);
}

function nextRound() {
    document.getElementById("addCard1").removeAttribute("disabled", "true");
    document.getElementById("nextBtn").setAttribute("disabled", "true");
    document.getElementById("card1").src = "";
    document.getElementById("card2").src = "";
    document.getElementById("card3").src = "";
    document.getElementById("card4").src = "";
    i++;
}


 if( card.length == 0) {
    Reset();
    console.log(" 3de manier werkt");
}


   
