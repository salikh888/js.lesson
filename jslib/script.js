var numOut = Math.floor((Math.random() * 10) + 1);
console.log(numOut);

function magic() {

    var num = document.getElementById('myNum').value,
        outMes = document.getElementById('out');


    if (num < numOut) {
        outMes.innerHTML = 'Вы ввели число меньше чем нужно';
    } else if (num > numOut) {
        outMes.innerHTML = 'Вы ввели число больше чем нужно';
    } else {
        outMes.innerHTML = 'Вы угадали';
    }

}

