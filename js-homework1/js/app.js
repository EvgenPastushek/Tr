console.log("Создаем переменные разных типов:");

/*строка*/
var	varString = "10"; 
console.log("Строка: " + varString + " " + typeof(varString));
/*число*/


var varNumber = 10;
console.log("Число: " + varNumber + " " + typeof(varNumber));

/*массив*/
var varArray = ['January', 'February', 'March', 
'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December'];
console.log("Массив: " + varArray + " " + typeof(varArray));

/*объект*/
var varObject = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
}
console.log("Объект: " + varObject + " " + typeof(varObject));

/*bool*/
var varBoolean = true;
console.log("Boolean: " + varBoolean + " " + typeof(varBoolean));

/*undefind*/
var varU;
console.log("undefind: " + varU + " " + typeof(varU));

/*функция*/
var varFunction = {
  name: 'Василий',
  sayHi: function() {
    alert('Привет!');
  }
};
console.log("Функция: " + varFunction + " " + typeof(varFunction));

/*переопределяем тип*/
var	varString = 10;
var varNumber = "10";
console.log("Строка: " + varString + " " + typeof(varString));
console.log("Число: " + varNumber + " " + typeof(varNumber));

/*сравниваем*/
console.log("Сравниваем их без учета типов: ");
console.log(varNumber == varString);
console.log("Сравниваем их с учетом типов: ");
console.log(varNumber === varString);

/*выводим массив*/
console.log("Выводим массив через for: ");
for (i=0; i<varArray.length; i++) {
	console.log(varArray[i]);
}

/*выводим массив*/
console.log("Выводим массив через do...while: ");
i=0;
do {
	console.log(varArray[i]);
	i++;
}  while(i<varArray.length);

/*ассоциативный массив*/
console.log("Вывод пары ключ-значение используя for ... in: ");
for (var key in varObject) {
	console.log(key + ":" + varObject[key]);
}

/*ассоциативный массив*/
console.log("Вывод пары ключ-значение используя forEach: ");
Object.keys(varObject).forEach(function (key) {
    console.log(key + ":" + varObject[key]);
});

/*Вывод всех методов переменной с функцией*/
console.log("Вывод всех методов переменной с функцией: ");
for(var i in varFunction) {
    if (varFunction.hasOwnProperty(i)) {
        console.log(i);
    }
}

/*Вывод Страшных методов прототипов*/
console.log("Вывод всех методов прототипов: ");
console.dir(varFunction.__proto__);