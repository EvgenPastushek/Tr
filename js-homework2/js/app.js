document.getElementById("square").onclick = function() { /*обработчик onklick*/
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0; /*рандом для выбора добавления*/
	if (randomNumber == 1) { /*через класс css*/
		Div1 = document.createElement("div"); /*создание div*/
		Div1.className = "square"; /*присваиваем сss класс*/
		document.querySelector(".pictures").appendChild(Div1); /*размещаем в .pictures*/
		}
	else { /*добавление св-в inline*/
		Div1 = document.createElement("div"); /*создание div*/
		/*свойства*/
		Div1.style.width = "100px";
		Div1.style.height = "100px";
		Div1.style.background = "#4B7782";
		document.querySelector(".pictures").appendChild(Div1);/*размещаем в .pictures*/
	}
    window.scrollBy(0, 9999);/*переход к низу страницы*/
}

document.getElementById("sircle").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div2 = document.createElement("div");
		Div2.className = "sircle";
		document.querySelector(".pictures").appendChild(Div2);
		}
	else {
		Div2 = document.createElement("div");
		Div2.style.width = "100px";
		Div2.style.height = "100px";
		Div2.style.borderRadius = "50px";
		Div2.style.background = "#0077FF";
		document.querySelector(".pictures").appendChild(Div2);
	}
    window.scrollBy(0, 9999);
}

document.getElementById("ellipse").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div3 = document.createElement("div");
		Div3.className = "ellipse";
		document.querySelector(".pictures").appendChild(Div3);
		}
	else {
		Div3 = document.createElement("div");
		Div3.style.width = "200px";
		Div3.style.height = "100px";
		Div3.style.borderRadius = "50%";
		Div3.style.background = "#008077";
		document.querySelector(".pictures").appendChild(Div3);
	}
    window.scrollBy(0, 9999);
}

document.getElementById("longsquare").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div4 = document.createElement("div");
		Div4.className = "longsquare";
		document.querySelector(".pictures").appendChild(Div4);
		}
	else {
		Div4 = document.createElement("div");
		Div4.style.width = "200px";
		Div4.style.height = "100px";
		Div4.style.background = "#FF7700";
		document.querySelector(".pictures").appendChild(Div4);
	}
    window.scrollBy(0, 9999);
}

document.getElementById("triangle").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div5 = document.createElement("div");
		Div5.className = "triangle";
		document.querySelector(".pictures").appendChild(Div5);
		}
	else {
		Div5 = document.createElement("div");
		Div5.style.width = "0";
		Div5.style.height = "0";
		Div5.style.borderLeft = "50px solid transparent";
		Div5.style.borderRight = "50px solid transparent";
		Div5.style.borderBottom = "100px solid #FF4577";
		document.querySelector(".pictures").appendChild(Div5);
	}
    window.scrollBy(0, 9999);
}

document.getElementById("trapezoid").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div6 = document.createElement("div");
		Div6.className = "trapezoid";
		document.querySelector(".pictures").appendChild(Div6);
		}
	else {
		Div6 = document.createElement("div");
		Div6.style.width = "100px";
		Div6.style.height = "0";
		Div6.style.borderLeft = "50px solid transparent";
		Div6.style.borderRight = "50px solid transparent";
		Div6.style.borderBottom = "100px solid #A977A9";
		document.querySelector(".pictures").appendChild(Div6);
	}
    window.scrollBy(0, 9999);
}

/*Удалить все картинки*/
document.getElementById("clean").onclick = function() {
	document.querySelector(".pictures").innerHTML = "";
}