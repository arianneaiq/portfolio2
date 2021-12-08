function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function swapStyleSheet(sheet) {
    document.getElementById('lightmodestyle').setAttribute('href', sheet);
}

let pen = anime({
    targets: '.cls-3',
    delay: 1000,
    keyframes: [
        { rotate: '360deg' },
    ],
    duration: 500,
    easing: 'easeOutExpo',
});

let name = anime({
    targets: '#name',
    rotateZ: {
        value: 360,
        duration: 900,
        easing: 'easeInOutSine'
    },
});