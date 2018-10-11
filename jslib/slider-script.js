var poloska = document.getElementById('slider-left');
var left = 0;


function sliderLeft() {
    var poloska = document.getElementById('polosa');
    left = left - 128;
    if (left < -512) {
        left = 0;
    }
    poloska.style.left = left + 'px';
}




