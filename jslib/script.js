var array = [222, 323, 'adad'];

function masOut() {
    var p = document.getElementById('out');
    var str = '';
    for (var i = 0; i < array.length; i++) {
        str += i + ' --- ' + array[i] + '<br>';
    }
    p.innerHTML = str;
}

masOut();

function p1() {
    var l1 = document.getElementById('l1').value;
    array.push(l1);
    masOut();
}

function p2() {
    array.pop(l1);
    masOut();
}

