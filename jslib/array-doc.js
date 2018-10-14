//Задачи на ассициативные мыссивы
var date = new Date();
var year = date.getFullYear();

var man = {
    "name" : "Ivan",
    "age" : 56,
    "sex" : "male",
    "id" : "01123",
    "year" : function () {
        var date = new Date();
        var year = date.getFullYear();
        return year - this.age;
    }
};
// console.log(man.year());

var arrayNum = {
    "mas" : [5, 5],
    "sum" : function () {
        var s = 0;
        for(var i = 0; i < this.mas.length; i++) {
            s += this.mas[i];

        }
        return s;
    }
};
// console.log(arrayNum.sum());

var product = {
    "00001" : {
        "title" : "Чай",
        "price" : 500.00,
        "weight" : 1.00,
        "image" : "img/tea.jpg",
        "exists" : true
    },
    "00002" : {
        "title" : "Кофе",
        "price" : 700.00,
        "weight" : 0.50,
        "image" : "img/coffee.jpg",
        "exists" : true,
    },
    "00003" : {
        "title" : "Сахар",
        "price" : 260.00,
        "weight" : 1.00,
        "image" : "img/sugar.jpg",
        "exists" : false,
    }
};
// console.log(product);
// console.log(product["00001"].title);

var out = " ";
for (var key in product) {
    console.log(product[key]);
    out +='Продукт: ' + '<b>' + product[key].title + '</b><br>';
    out +='Цена: ' + product[key].price + ' сум ' + 'за '+ product[key].weight + ' кг' +'<br>';
    // out +='Вес: ' + product[key].weight + ' кг' + '<br>';
    out += '<img src="' + product[key].image + '" width="189" height="255"><br>';
    if (product[key].exists === true) {
        out +='В наличии' + '<br><hr><br>';
    } else {
        out +='Нет в наличии' + '<br><hr><br>';
    };
    // break;
}

document.getElementById('out').innerHTML = out;

