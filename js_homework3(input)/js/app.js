// счетчик
var s = document.getElementById("slider"),
    num = document.getElementById("number");

s.addEventListener("input", function() {
	if (s.value == 0 || s.value == 100) {
    num.innerHTML =s.value/100 + " video";
    }
    else if (s.value == 2500) {
    	num.innerHTML ="unlimited video";
    }
    else {
    num.innerHTML =s.value/100 + " video";
    }
}, false);
//кнопки
s.addEventListener("input", function() {

	if (s.value < 1000) {
        document.querySelector(".active").classList.remove('active');
        document.querySelector(".tarif1").classList.add('active');
    }
    else if (s.value < 2500 && s.value >= 1000) {
        document.querySelector(".active").classList.remove('active');
        document.querySelector(".tarif2").classList.add('active');
    }
    else {
        document.querySelector(".active").classList.remove('active');
        document.querySelector(".tarif3").classList.add('active');
    }
}, false);

//функция
var App = (function(params) {

    var settings, _self = this;

    if (params) {
        settings = params;
    } else {
        settings = {
            talk : "vou vou",
            age : 10,
            run : false,
            array : ["sleep", "eat", "play"],
            food : {whatDoesTheDogEat: "meat"}
        };
    }

    function showSettings() {
        console.log(settings);
    }

    function showThis() {
        console.log(_self);
    }

    return {
        showSettings: showSettings,
        showThis: showThis         
    };

});

function showSettings() {
    // this — ссылка на объект, в контексте которого вызвана функция
    this.showSettings();
}

function showThis() {
    this.showThis();
}


//первая кнопка
b = document.getElementById("botton1");
// вывод в консоль при клике
b.addEventListener("click", function() {
    var app = new App();
    showSettings.call(app); // выдаст сообщение
    showThis.apply(app); // выдаст сообщение
}, false);
