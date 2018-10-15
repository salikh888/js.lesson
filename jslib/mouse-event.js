var block = document.getElementById('one');


//клик мышью
// block.onclick = function () {
//     this.style.background = 'green';
// }

//двойной клик мышью
block.ondblclick = function () {
    this.style.background = 'red';
}

//клик правой кнопкой мыши
block.oncontextmenu = function () {
    this.style.background = 'black';
    return false;
}

//навидение мыши
// block.onmouseenter = function () {
//     console.log('in!!!!!!!');
//     this.style.background = 'gold';
// }
//
// //мышь уходит с элемента
// block.onmouseleave = function () {
//     this.style.background = 'orange';
// }

//движение мыши
// var a = 0;
// block.onmousemove = function () {
//     a++;
//     this.style.width = 150 + a + 'px';
// }

//нажимем и держим кнопку мыши любую
block.onmousedown = function (event) {
    this.style.background = 'cyan';
    console.log('button' + event.button);
    console.log('which' + event.which);

}

block.onmouseup = function () {
    this.style.background = 'pink';
}