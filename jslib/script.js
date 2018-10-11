var radio = document.getElementsByName('prim');

for (var i = 0; i < radio.length; i++) {
    radio[i].onchange = testRadio;
}

function testRadio() {
    console.log (this.value);
}

document.getElementById('one').onclick = checkRadio;

var n = document.getElementsByName('prim');

function checkRadio() {
    for (var i = 0; i < n.length; i++) {
        if (n[i].checked) {
            alert(n[i].value);
            break;
        }
    }
}
//CSS Генератор

document.getElementById('rl').oninput = cssGenerator;

function cssGenerator() {
    var div = document.getElementById('test');
    var out = document.getElementById('out');
    console.log(this.value);
    div.style.borderRadius =this.value + 'px';
    out.innerHTML = 'webkit-border-radius: ' + this.value + 'px;\n';
    out.innerHTML += 'border-radius: ' + this.value + 'px;';
}



