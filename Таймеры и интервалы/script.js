var moving = 0;

var test = document.getElementById('test');

var step = 3;

function move() {
    test.style.marginLeft = moving + 'px';
    moving = moving + step;
    console.log(moving);
}

var timer = false;

document.getElementById('start').onclick = function () {
    // if (timer === false) {
        moving = 0;
        timer = setInterval(move, 50);
//     }else {
//         ;
//     }
}

document.getElementById('stop').onclick = function () {
    clearInterval(timer);
}

document.getElementById('return').onclick = function () {
    clearInterval(timer);
    test.style.marginLeft = 0 + 'px';
}