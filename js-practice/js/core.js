var OXFramework = function() {

    // Здесь через `var` указываем какие-то необходимые для фреймворка значения
    var newP = document.createElement('div');//создаем блок для новой новости
	var newsBlock = document.querySelector(".news1"); //выбираем блок новостей
	var allNewsAdress = "https://cors-anywhere.herokuapp.com/babruysk.by/ajax_php/news-api.php";
	var oneNewsAdress = "https://cors-anywhere.herokuapp.com/http://babruysk.by/ajax_php/news-item-api.php?id=";
	var a = document.querySelector(".event-listener");// выбираем второй заголовок
	var matches_2 = null;
	var allNews = '#news';
	var aboutNews = /(\#news\/(\d+)$)/;
	var nodes = document.querySelector(".btn-search");// нажатие на поиск
	// переменная для хранения хэша
	var cache = {};

	// AJAX запрос списка новостей 
	OXFramework.prototype.newsListLoader = function() {
		var xhr = new XMLHttpRequest(); // начало AJAX запроса
		xhr.open("GET", allNewsAdress); // адрес для получения новостей 
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){ // проверка статуса
			if(xhr.status === 200){ 
		}else{
			alert('Error: '+xhr.status); 
			}
		}
	}
	xhr.prototype.onerror = function() {
		alert('Error: '+xhr.status); 
	}
	xhr.prototype.onloadstart = function() {
		newsBlock.innerHTML = "Загрузка..."; // удаление содержимого новостей
	}
	xhr.prototype.onload = function() {
		var newP = null;// переопределяем
		var newP = document.createElement('div');//создаем блок для новой новости
		newsBlock.innerHTML = "Данные запроса:"; // удаление содержимого новостей
		newsBlock.appendChild(newP);// вставляем ее после новостного блока, где написано "Загрузка..."
		var json = xhr.responseText.replace(/,(?![^,]*,)/m, ''); // убираем запятую в 144 строке
		console.log(json); // проверяем что получаем
		if (json !== Object)
			try {
				var jsonObj = JSON.parse(json); // создаем пересенную объекта, полученную из JSON
			}
			catch (json){
				alert("Получен объект!");
			}
		history.pushState(null, null, "#news"); // изменяем адрес
		newP.innerHTML = tmpl("tmpl", jsonObj);
		}
	xhr.send(null);
	}

	// получение подробной новости
	OXFramework.prototype.onArticleTitleClick = function(id){ // функция нажатия на элементы новостного блока
		window.valueId = id;// делаем переменную глобальной
		var checkedNews = new XMLHttpRequest(); // начало AJAX запроса #2
		checkedNews.open("GET", oneNewsAdress + valueId); // адрес для получения новостей 
		checkedNews.onreadystatechange = function(){
			if(checkedNews.readyState === 4){ // проверка статуса
				if(checkedNews.status === 200){ 
				}else{
					alert('Error: '+checkedNews.status); 
				}
			}
		}
		checkedNews.prototype.onerror = function() {
			alert('Error: '+checkedNews.status); 
		}
		checkedNews.prototype.onloadstart = function() {
			newsBlock.innerHTML = "Загрузка..."; // удаление содержимого новостей
		}
		checkedNews.prototype.onload = function() {
			var newP = null; // переопределяем
			var newP = document.createElement('div');//создаем блок для новой новости
			newsBlock.innerHTML = "Данные запроса:"; // удаление содержимого новостей
			newsBlock.appendChild(newP);// вставляем ее после новостного блока, где написано "Загрузка..."
			var jsonNews = checkedNews.responseText;
			console.log(jsonNews); // проверяем что получаем
			if (jsonNews !== Object)
			try {
				var jsonObjNews = JSON.parse(jsonNews); // создаем пересенную объекта, полученную из JSON
			}
			catch (jsonNews){
				alert("Получен объект!");
			}
			history.pushState(null, null, "#news/" + valueId); // изменяем адрес
			newP.innerHTML = tmpl("newsTmpl", jsonObjNews);
	
			var p = document.querySelector(".event-listener2");// выбираем второй заголовок
			p.addEventListener("click", newsListLoader, false);
		}
	checkedNews.send(null);
	window.scrollBy(0,-9999);
	}

	// изменение хэша
	window.onload = function changed() { // Функция обработчик, вызывается когда меняется hash(onload)
		if(allNews == location.hash) {
			window['newsListLoader']();//вызываем нужную функцию
		};
		var matches_2 = aboutNews.exec(window.location.hash);
		if(matches_2) {
			window["onArticleTitleClick"](matches_2[2]);//вызываем нужную функцию и передаем ID
			window.scrollBy(0,-9999);
		};
	}
	window.onhashchange = function changed() { // Функция обработчик, вызывается когда меняется hash(forward & back)
		if(allNews == location.hash) {
			window['newsListLoader']();
			}
		var matches_2 = aboutNews.exec(window.location.hash);
		if(matches_2) {
			window["onArticleTitleClick"](matches_2[2]);
			window.scrollBy(0,-9999);
		};
	hash = location.hash;
	};

    // AJAX темплейты tmpl (John Resign Micro-Templating)
    OXFramework.prototype.tmpl = function(str, data) {
		var fn = !/\W/.test(str) ?
		cache[str] = cache[str] ||
		tmpl(document.getElementById(str).innerHTML) :
		new Function("obj",
		"var p=[],print=function(){p.push.apply(p,arguments);};" +
		"with(obj){p.push('" +
		str
		.replace(/[\r\t\n]/g, " ")
		.split("<%").join("\t")
		.replace(/((^|%>)[^\t]*)'/g, "$1\r")
		.replace(/\t=(.*?)%>/g, "',$1,'")
		.split("\t").join("');")
		.split("%>").join("p.push('")
		.split("\r").join("\\'")
		+ "');}return p.join('');");
		return data ? fn( data ) : fn;
	}
};