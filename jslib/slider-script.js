document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
var left = 0;


function sliderLeft() {
    var poloska = document.getElementById('polosa');
    left = left - 128;
    if (left < -512) {
        left = 0;
    }
    poloska.style.left = left + 'px';
}

function sliderRight() {
    var poloska = document.getElementById('polosa');
    left = left + 128;
    if (left >= 0) {
        left = 0;
    }
    poloska.style.left = left + 'px';
}



