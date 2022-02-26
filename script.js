function randColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    //`````````````````````````````````````````````````````````````````````````````````````````````//
    // Colors inside boxes have been applied at 0.6 opacity to match with the light theme of site. //
    //`````````````````````````````````````````````````````````````````````````````````````````````//
    return 'rgba' + '( ' + r + ', ' + g + ', ' + b + ', 0.6 )';
}

function wrongAnswer(i) {
    score = score - 1;

    if (n == 3) {
        document.querySelector('.easy').style.setProperty('background-color', 'grey');
        document.querySelector('.Question_Color').style.setProperty('background-color', 'grey');
    } else {
        document.querySelector('.hard').style.setProperty('background-color', 'grey');
        document.querySelector('.Question_Color').style.setProperty('background-color', 'grey');
    }

    document.querySelector('.Question_Color').innerHTML = '✕';
    document.querySelectorAll('.grid-item')[i].style.setProperty('visibility', 'hidden');
    document.querySelector('.Score').innerHTML = 'Score : ' + score;

    setTimeout(function() {
        document.querySelector('.Question_Color').style.removeProperty("background-color");
        document.querySelector('.Question_Color').innerHTML = 'rgb {' + correct_color.substring(5, correct_color.length - 7) + ' }';

        if (n == 3) {
            document.querySelector('.easy').style.setProperty('background-color', '#9fe493');
        } else {
            document.querySelector('.hard').style.setProperty('background-color', '#9fe493');
        }

    }, 1000);

}

function correctAnswer() {
    score = score + 1;

    if (n == 3) {
        document.querySelector('.easy').style.setProperty('background-color', correct_color);
        document.querySelector('.Question_Color').style.setProperty('background-color', correct_color);
    } else {
        document.querySelector('.hard').style.setProperty('background-color', correct_color);
        document.querySelector('.Question_Color').style.setProperty('background-color', correct_color);
    }

    document.querySelector('.Question_Color').innerHTML = '✓';
    document.querySelector('.Score').innerHTML = 'Score : ' + score;


    for (var i = 0; i < n; i++) {
        document.querySelectorAll('.grid-item')[i].style.removeProperty('visibility');
        document.querySelectorAll('.grid-item')[i].style.setProperty('background-color', correct_color);
        document.querySelectorAll('.grid-item')[i].style.removeProperty('border-color');
        document.querySelectorAll('.grid-item')[i].style.removeProperty('color');
    }

    setTimeout(function() {
        for (var i = 0; i < n; i++) {
            document.querySelectorAll(".grid-item")[i].style.removeProperty("background-color");
        }
        document.querySelector('.Question_Color').style.removeProperty("background-color");

        if (n == 3) {
            document.querySelector('.easy').style.setProperty('background-color', '#9fe493');
        } else {
            document.querySelector('.hard').style.setProperty('background-color', '#9fe493');
        }

    }, 1000);

    setTimeout(refreshColors, 1000);
}

function refreshColors() {
    correct_color = randColor();
    var correct_index = Math.floor(Math.random() * n);

    for (let j = 0; j < n; j++) {
        document.querySelectorAll('.grid-item')[j].style.removeProperty('visibility');
    }

    for (let i = 0; i < n; i++) {
        if (i != correct_index) {
            document.querySelectorAll(".grid-item")[i].style.setProperty('background-color', randColor());
            document.querySelectorAll(".grid-item")[i].onclick = function() {
                wrongAnswer(i);
            };
        } else {
            document.querySelectorAll(".grid-item")[i].style.setProperty('background-color', correct_color);
            document.querySelectorAll(".grid-item")[i].onclick = correctAnswer;
            console.log(i + 1);
        }
    }
    document.querySelector('.Question_Color').innerHTML = 'rgb {' + correct_color.substring(5, correct_color.length - 7) + ' }';
}

function easyMode() {
    n = 3;
    score = 0;

    document.querySelector('.easy').style.setProperty('background-color', '#9fe493');
    document.querySelector('.hard').style.removeProperty('background-color');
    document.querySelectorAll('.grid-item')[3].style.setProperty('visibility', 'hidden');
    document.querySelectorAll('.grid-item')[4].style.setProperty('visibility', 'hidden');
    document.querySelectorAll('.grid-item')[5].style.setProperty('visibility', 'hidden');
    document.querySelector('.Score').innerHTML = 'Score : ' + score;

    refreshColors();
}

function hardMode() {
    n = 6;
    score = 0;

    document.querySelector('.hard').style.setProperty('background-color', '#9fe493');
    document.querySelector('.easy').style.removeProperty('background-color');
    document.querySelectorAll('.grid-item')[3].style.removeProperty('visibility');
    document.querySelectorAll('.grid-item')[4].style.removeProperty('visibility');
    document.querySelectorAll('.grid-item')[5].style.removeProperty('visibility');
    document.querySelector('.Score').innerHTML = 'Score : ' + score;

    refreshColors();
}


var score = 0;
var correct_color;
var n = 3;

//default easy mode;
document.querySelectorAll('.grid-item')[3].style.setProperty('visibility', 'hidden');
document.querySelectorAll('.grid-item')[4].style.setProperty('visibility', 'hidden');
document.querySelectorAll('.grid-item')[5].style.setProperty('visibility', 'hidden');
document.querySelector('.easy').style.setProperty('background-color', '#9fe493');


refreshColors();
