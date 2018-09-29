var numOut = Math.floor((Math.random() * 10) + 1),
form = document.getElementById('Myform');

console.log(numOut);

function magic() {

    var num = document.getElementById('myNum').value,
        outMes = document.getElementById('out'),
        i = 0;


    if (num < numOut) {
        outMes.innerHTML = 'Вы ввели число меньше чем нужно';
    } else if (num > numOut) {
        outMes.innerHTML = 'Вы ввели число больше чем нужно';
    } else {
        outMes.innerHTML = 'Вы угадали';
        // form.reset();
    }


    // i++;
    // console.log(i);
    //
    // if (i == 3) {
    //     form.reset();
    // }

}


// var prNum, tempOut;
// // prNum = Math.floor((Math.random() * 10) + 1);
// // // tempOut = document.getElementById('temp-out');
// // //tempOut.innerHTML = prNum;
// // console.log(prNum);
// //
// //
// // function f1(){
// //     var num, out;
// //
// //     num = document.getElementById('mynum').value;
// //     out = document.getElementById('out');
// //
// //     if (num == prNum) {
// //         out.innerHTML = 'Вы угадали';
// //     }
// //     else if (num > prNum){
// //         out.innerHTML = 'Вы ввели число больше чем нужно';
// //     }
// //     else {
// //         out.innerHTML = 'Вы ввели число меньше чем нужно';
// //     }
// //
// // }