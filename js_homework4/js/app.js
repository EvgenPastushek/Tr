var newP = document.createElement('div');//создаем блок для новой новости
var newsBlock = document.querySelector(".news1"); //выбираем блок новостей

//при клике на =заголовок "Свежие новости" запускается AJAX запрос!
var a = document.querySelector("h2");// выбираем  второй заголовок
a.addEventListener("click", function() {// слушатель события click
	var xhr = new XMLHttpRequest(); // начало AJAX запроса
	xhr.open("GET", "https://cors-anywhere.herokuapp.com/babruysk.by/ajax_php/news-api.php"); // адрес для получения новостей 
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4){ // проверка статуса
			if(xhr.status === 200){ 
			}else{
				alert('Error: '+xhr.status); 
			}
		}
	}
	xhr.onerror = function() {
		alert('Error: '+xhr.status); 
	}
	xhr.onloadstart = function() {
		newsBlock.innerHTML = "Загрузка..."; // удаление содержимого новостей
	}
	xhr.onload = function() {
		var newP = null;// переопределяем
		var newP = document.createElement('div');//создаем блок для новой новости
		newsBlock.innerHTML = "Данные запроса:"; // удаление содержимого новостей
		newsBlock.appendChild(newP);// вставляем ее после новостного блока, где написано "Загрузка..."
		var json = xhr.responseText.replace(/,(?![^,]*,)/m, ''); // убираем запятую в 144 строке
		console.log(json); // проверяем что получаем
		var jsonObj = JSON.parse(json); // создаем пересенную объекта, полученную из JSON

		for (var i = 0; i < jsonObj.items.length; i++) { // проходимся по каждому элементу
			var articleDiv = document.createElement('div'); // создаем div как контейнер для новости
			articleDiv.setAttribute('onclick', 'onArticleTitleClick(' + jsonObj.items[i].id + ');') // onclick для ф-и ID

			var image = document.createElement('img'); 
			image.setAttribute('src', jsonObj.items[i].image); // передаем ссылку на картинку
			image.setAttribute('alt', jsonObj.items[i].title);
			articleDiv.appendChild(image);

			var titleSpan = document.createElement('h4'); // заголовок новости
			titleSpan.innerHTML = jsonObj.items[i].title;

			var previewSpan = document.createElement('p'); // краткая новость
			previewSpan.innerHTML = jsonObj.items[i].preview;

			var dateSpan = document.createElement('p'); // дата
			dateSpan.innerHTML = jsonObj.items[i].date;

			articleDiv.appendChild(titleSpan);
			articleDiv.appendChild(dateSpan);
			articleDiv.appendChild(previewSpan);

			newP.appendChild(articleDiv); //добавление в список новостей
		}
	}
	xhr.send(null);
}, false);

// вытягиваем id по клику на объект
function onArticleTitleClick(id){ // функция нажатия на элементы новостного блока
	window.valueId = id;// делаем переменную глобальной
	// запрос для вывода подробной новости
	var checkedNews = new XMLHttpRequest(); // начало AJAX запроса #2
	checkedNews.open("GET", "https://cors-anywhere.herokuapp.com/http://babruysk.by/ajax_php/news-item-api.php?id=" + valueId); // адрес для получения новостей 
	checkedNews.onreadystatechange = function(){
		if(checkedNews.readyState === 4){ // проверка статуса
			if(checkedNews.status === 200){ 
			}else{
				alert('Error: '+checkedNews.status); 
			}
		}
	}
	checkedNews.onerror = function() {
		alert('Error: '+checkedNews.status); 
	}
	checkedNews.onloadstart = function() {
		newsBlock.innerHTML = "Загрузка..."; // удаление содержимого новостей
	}
	checkedNews.onload = function() {
		var newP = null; // переопределяем
		var newP = document.createElement('div');//создаем блок для новой новости
		newsBlock.innerHTML = "Данные запроса:"; // удаление содержимого новостей
		newsBlock.appendChild(newP);// вставляем ее после новостного блока, где написано "Загрузка..."
		var jsonNews = checkedNews.responseText.replace(/\n|\t|\s/, ''); // удаляем символы
		console.log(jsonNews); // проверяем что получаем
		var jsonObjNews = JSON.parse(jsonNews); // создаем пересенную объекта, полученную из JSON

			var articleDiv = document.createElement('div'); // создаем div как контейнер для новости

			var image = document.createElement('img'); 
			image.setAttribute('src', jsonObjNews.item.image); // передаем ссылку на картинку
			image.setAttribute('alt', jsonObjNews.item.title);
			image.setAttribute('class', "addedImage");
			articleDiv.appendChild(image);

			var titleSpan = document.createElement('h4'); // заголовок новости
			titleSpan.innerHTML = jsonObjNews.item.title;

			var textSpan = document.createElement('p'); // краткая новость
			textSpan.innerHTML = jsonObjNews.item.text;

			var dateSpan = document.createElement('p'); // дата
			dateSpan.innerHTML = jsonObjNews.item.date;

			articleDiv.appendChild(titleSpan);
			articleDiv.appendChild(dateSpan);
			articleDiv.appendChild(textSpan);

			newP.appendChild(articleDiv); //добавление в список новостей
	}
	checkedNews.send(null);
}