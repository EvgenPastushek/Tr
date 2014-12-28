//слайдер
var knob = document.getElementById('sl_knob');

function slider(elemId, sliderWidth, range1, range2, step) {
    var knobWidth = 30;             // ширина и высота бегунка
    var knobHeight = 30;            // изменяются в зависимости от используемых изображений
    var sliderHeight = 30;          // высота slider'а
    var offsX,tmp;                  // вспомагательные переменные
    var d = document;
    var isIE = d.all || window.opera;   // определяем модель DOM
    var point = (sliderWidth-knobWidth-3)/(range2-range1);// point - количество пикселей на единицу значения
    var slider = d.getElementById('sl_slider');
    knob.style.width = knobWidth+'px'; 
    knob.style.height = knobHeight+'px';
    knob.style.left = 240+'px';
    slider.style.width = sliderWidth+'px';
    slider.style.height = sliderHeight+'px';
    var sliderOffset = slider.offsetLeft;           // sliderOffset - абсолютное смещение slider'а
    tmp = slider.offsetParent;      // от левого края в пикселях (в IE не работает)
    while(tmp.tagName != 'BODY') {
    sliderOffset += tmp.offsetLeft;     // тут его и находим
    tmp = tmp.offsetParent;
}
if(isIE)   {                  // в зависимости от модели DOM назначаем слушателей событий
    knob.onmousedown = startCoord;     
    slider.onclick = sliderClick;      
    knob.onmouseup = endCoord;     
    slider.onmouseup = endCoord;           
}
else {
    knob.addEventListener("mousedown", startCoord, true);      
    slider.addEventListener("click", sliderClick, true);       
    knob.addEventListener("mouseup", endCoord, true);  
    slider.addEventListener("mouseup", endCoord, true);
}

function setValue(x)  {  // установка по пикселям
    if(x < 0) knob.style.left = 0;
    else if(x > sliderWidth-knobWidth-3) knob.style.left = (sliderWidth-3-knobWidth)+'px';
    else {
    if(step == 0) knob.style.left = x+'px';        
    else knob.style.left = Math.round(x/(step*point))*step*point+'px';
}

}
function setValue2(x)  { // установка по значению
if(x < range1 || x > range2) alert('Value is not included into a slider range!');
else setValue((x-range1)*point);
 
d.getElementById('info').value = getValue();
}

function getValue()
{return Math.round(parseInt(knob.style.left)/point)+range1;}

function sliderClick(e) {  
    var x;
    if(isIE) {
        if(event.srcElement != slider) return; //IE onclick bug
        x = event.offsetX - Math.round(knobWidth/2);
    }  
    else x = e.pageX-sliderOffset-knobWidth/2;
    setValue(x);
}

 
function startCoord(e) {               
    if(isIE) { 
        offsX = event.clientX - parseInt(knob.style.left);
        slider.onmousemove = mov;
    }
    else {             
        slider.addEventListener("mousemove", mov, true);
    }
}
 
function mov(e) {
    var x; 
    if(isIE) x = event.clientX-offsX;
    else x = e.pageX-sliderOffset-knobWidth/2;
    setValue(x);
}
 
function endCoord() {
    if(isIE) slider.onmousemove = null;
    else slider.removeEventListener("mousemove", mov, true);
}
 
// объявляем функции setValue2 и getValue как методы класса
this.setValue = setValue2;
this.getValue = getValue;
} // конец класса
 
// значения слайдера
var mysl1 = new slider('sl', 530, 530, 20, 20);

// счетчик и активные блоки
    
num = document.getElementById("number"),
p = document.getElementById("sl_slider");

p.addEventListener("mousemove", function() {
    var s = parseInt(knob.style.left);
	if (s < 20) {
    num.innerHTML =Math.ceil(s/20) + " video";
    }
    else if (s > 495) {
    	num.innerHTML ="unlimited video";
    }
    else {
    num.innerHTML =Math.ceil(s/20) + " videos";
    }

    var s = parseInt(knob.style.left);

	if (s < 200) {
        document.querySelector(".active").classList.remove('active');
        document.querySelector(".tarif1").classList.add('active');
    }
    else if (s < 480 && s > 200) {
        document.querySelector(".active").classList.remove('active');
        document.querySelector(".tarif2").classList.add('active');
    }
    else {
        document.querySelector(".active").classList.remove('active');
        document.querySelector(".tarif3").classList.add('active');
    }
}, false);

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
//обработчик
b.addEventListener("click", function() {
    var app = new App();
    showSettings.call(app); // выдаст сообщение "Cat"
    showThis.apply(app);
}, false);