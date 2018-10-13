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
console.log(man.year());

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
console.log(arrayNum.sum());


var product = {
    "00001" : {
        "title" : "Чай",
        "price" : 500.00,
        "weight" : 1.00,
        "image" : "js.lesson/img/tea.jpg",
        "exists" : true
    },
    "00002" : {
        "title" : "Кофе",
        "price" : 700.00,
        "weight" : 0.50,
        "image" : "js.lesson/img/coffee.jpg",
        "exists" : true,
    },
    "00003" : {
        "title" : "Сахар",
        "price" : 260.00,
        "weight" : 1.00,
        "image" : "js.lesson/img/sugar.jpg",
        "exists" : false,
    }
}
console.log(product);
console.log(product["00001"].title);





