document.getElementById("square").onclick = function() { /*обработчик onklick*/
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0; /*рандом для выбора добавления*/
	if (randomNumber == 1) { /*через класс css*/
		Div1 = document.createElement("div"); /*создание div*/
		Div1.className = "square"; /*присваиваем сss класс*/
		document.querySelector(".pictures").appendChild(Div1); /*размещаем в .pictures*/
		/*создание радиокнопок*/
		Input1a = document.createElement("input");
		Input1a.setAttribute("type","radio");
		Input1a.setAttribute("name","square");
		Input1a.className = "check1a";
		Input1b = document.createElement("input");
		Input1b.setAttribute("type","radio");
		Input1b.setAttribute("name","square");
		Input1b.className = "check1b";
		document.querySelector(".pictures").appendChild(Input1a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input1b); /*размещаем в .pictures*/
		}
	else { /*добавление св-в inline*/
		Div1 = document.createElement("div"); /*создание div*/
		/*свойства*/
		Div1.style.width = "100px";
		Div1.style.height = "100px";
		Div1.style.background = "#4B7782";
		document.querySelector(".pictures").appendChild(Div1);/*размещаем в .pictures*/
		/*создание радиокнопок*/
		Input1a = document.createElement("input");
		Input1a.setAttribute("type","radio");
		Input1a.setAttribute("name","square");
		Input1a.className = "check1a";
		Input1b = document.createElement("input");
		Input1b.setAttribute("type","radio");
		Input1b.setAttribute("name","square");
		Input1b.className = "check1b";
		document.querySelector(".pictures").appendChild(Input1a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input1b); /*размещаем в .pictures*/
	}
    window.scrollBy(0, 9999);/*переход к низу страницы*/
}

document.getElementById("sircle").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div2 = document.createElement("div");
		Div2.className = "sircle";
		document.querySelector(".pictures").appendChild(Div2);
		/*создание радиокнопок*/
		Input2a = document.createElement("input");
		Input2a.setAttribute("type","radio");
		Input2a.setAttribute("name","square");
		Input2a.className = "check2a";
		Input2b = document.createElement("input");
		Input2b.setAttribute("type","radio");
		Input2b.setAttribute("name","square");
		Input2b.className = "check2b";
		document.querySelector(".pictures").appendChild(Input2a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input2b); /*размещаем в .pictures*/
		}
	else {
		Div2 = document.createElement("div");
		Div2.style.width = "100px";
		Div2.style.height = "100px";
		Div2.style.borderRadius = "50px";
		Div2.style.background = "#0077FF";
		document.querySelector(".pictures").appendChild(Div2);
		/*создание радиокнопок*/
		Input2a = document.createElement("input");
		Input2a.setAttribute("type","radio");
		Input2a.setAttribute("name","square");
		Input2a.className = "check2a";
		Input2b = document.createElement("input");
		Input2b.setAttribute("type","radio");
		Input2b.setAttribute("name","square");
		Input2b.className = "check2b";
		document.querySelector(".pictures").appendChild(Input2a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input2b); /*размещаем в .pictures*/
	}
    window.scrollBy(0, 9999);
}

document.getElementById("ellipse").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div3 = document.createElement("div");
		Div3.className = "ellipse";
		document.querySelector(".pictures").appendChild(Div3);
		/*создание радиокнопок*/
		Input3a = document.createElement("input");
		Input3a.setAttribute("type","radio");
		Input3a.setAttribute("name","square");
		Input3a.className = "check3a";
		Input3b = document.createElement("input");
		Input3b.setAttribute("type","radio");
		Input3b.setAttribute("name","square");
		Input3b.className = "check3b";
		document.querySelector(".pictures").appendChild(Input3a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input3b); /*размещаем в .pictures*/
		}
	else {
		Div3 = document.createElement("div");
		Div3.style.width = "200px";
		Div3.style.height = "100px";
		Div3.style.borderRadius = "50%";
		Div3.style.background = "#008077";
		document.querySelector(".pictures").appendChild(Div3);
		/*создание радиокнопок*/
		Input3a = document.createElement("input");
		Input3a.setAttribute("type","radio");
		Input3a.setAttribute("name","square");
		Input3a.className = "check3a";
		Input3b = document.createElement("input");
		Input3b.setAttribute("type","radio");
		Input3b.setAttribute("name","square");
		Input3b.className = "check3b";
		document.querySelector(".pictures").appendChild(Input3a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input3b); /*размещаем в .pictures*/
	}
    window.scrollBy(0, 9999);
}

document.getElementById("longsquare").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div4 = document.createElement("div");
		Div4.className = "longsquare";
		document.querySelector(".pictures").appendChild(Div4);
		/*создание радиокнопок*/
		Input4a = document.createElement("input");
		Input4a.setAttribute("type","radio");
		Input4a.setAttribute("name","square");
		Input4a.className = "check4a";
		Input4b = document.createElement("input");
		Input4b.setAttribute("type","radio");
		Input4b.setAttribute("name","square");
		Input4b.className = "check4b";
		document.querySelector(".pictures").appendChild(Input4a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input4b); /*размещаем в .pictures*/
		}
	else {
		Div4 = document.createElement("div");
		Div4.style.width = "200px";
		Div4.style.height = "100px";
		Div4.style.background = "#FF7700";
		document.querySelector(".pictures").appendChild(Div4);
		/*создание радиокнопок*/
		Input4a = document.createElement("input");
		Input4a.setAttribute("type","radio");
		Input4a.setAttribute("name","square");
		Input4a.className = "check4a";
		Input4b = document.createElement("input");
		Input4b.setAttribute("type","radio");
		Input4b.setAttribute("name","square");
		Input4b.className = "check4b";
		document.querySelector(".pictures").appendChild(Input4a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input4b); /*размещаем в .pictures*/
	}
    window.scrollBy(0, 9999);
}

document.getElementById("triangle").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div5 = document.createElement("div");
		Div5.className = "triangle";
		document.querySelector(".pictures").appendChild(Div5);
		/*создание радиокнопок*/
		Input5a = document.createElement("input");
		Input5a.setAttribute("type","radio");
		Input5a.setAttribute("name","square");
		Input5a.className = "check5a";
		Input5b = document.createElement("input");
		Input5b.setAttribute("type","radio");
		Input5b.setAttribute("name","square");
		Input5b.className = "check5b";
		document.querySelector(".pictures").appendChild(Input5a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input5b); /*размещаем в .pictures*/
		}
	else {
		Div5 = document.createElement("div");
		Div5.style.width = "0";
		Div5.style.height = "0";
		Div5.style.borderLeft = "50px solid transparent";
		Div5.style.borderRight = "50px solid transparent";
		Div5.style.borderBottom = "100px solid #FF4577";
		document.querySelector(".pictures").appendChild(Div5);
		/*создание радиокнопок*/
		Input5a = document.createElement("input");
		Input5a.setAttribute("type","radio");
		Input5a.setAttribute("name","square");
		Input5a.className = "check5a";
		Input5b = document.createElement("input");
		Input5b.setAttribute("type","radio");
		Input5b.setAttribute("name","square");
		Input5b.className = "check5b";
		document.querySelector(".pictures").appendChild(Input5a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input5b); /*размещаем в .pictures*/
	}
    window.scrollBy(0, 9999);
}

document.getElementById("trapezoid").onclick = function() {
	var randomNumber = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
	if (randomNumber == 1) {
		Div6 = document.createElement("div");
		Div6.className = "trapezoid";
		document.querySelector(".pictures").appendChild(Div6);
		/*создание радиокнопок*/
		Input6a = document.createElement("input");
		Input6a.setAttribute("type","radio");
		Input6a.setAttribute("name","square");
		Input6a.className = "check6a";
		Input6b = document.createElement("input");
		Input6b.setAttribute("type","radio");
		Input6b.setAttribute("name","square");
		Input6b.className = "check6b";
		document.querySelector(".pictures").appendChild(Input6a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input6b); /*размещаем в .pictures*/
		}
	else {
		Div6 = document.createElement("div");
		Div6.style.width = "100px";
		Div6.style.height = "0";
		Div6.style.borderLeft = "50px solid transparent";
		Div6.style.borderRight = "50px solid transparent";
		Div6.style.borderBottom = "100px solid #A977A9";
		document.querySelector(".pictures").appendChild(Div6);
		/*создание радиокнопок*/
		Input6a = document.createElement("input");
		Input6a.setAttribute("type","radio");
		Input6a.setAttribute("name","square");
		Input6a.className = "check6a";
		Input6b = document.createElement("input");
		Input6b.setAttribute("type","radio");
		Input6b.setAttribute("name","square");
		Input6b.className = "check6b";
		document.querySelector(".pictures").appendChild(Input6a); /*размещаем в .pictures*/
		document.querySelector(".pictures").appendChild(Input6b); /*размещаем в .pictures*/
	}
    window.scrollBy(0, 9999);
}

/*Удалить все картинки*/
document.getElementById("clean").onclick = function() {
	document.querySelector(".pictures").innerHTML = "";
}

/*Анимации размера*/
$(document).on("click", '[type="radio"]', function() {
	$(".check1b").prev().prev().removeClass("grow");
	$(".check1a:checked").prev().animate({
        width: "200px",
        height: "200px",
    }, 1500 ).animate({
        width: "100px",
        height: "100px",
    }, 1500 );
	$(".check1b:checked").prev().prev().addClass("grow");
});

/*Анимации уезда за экран*/
$(document).on("click", '[type="radio"]', function() {
	$(".check2b").prev().prev().removeClass("dissapear");
	$(".check2a:checked").prev().animate({
        marginRight: "-500px",
    }, 1500 ).animate({
        marginRight: "41%",
    }, 1500 );
	$(".check2b:checked").prev().prev().addClass("dissapear");
});

/*JQuery не работает (вращение овала)*/
$(document).on("click", '[type="radio"]', function() {
	$(".check3b").prev().prev().removeClass("rotate");
	$(".check3a:checked").prev().animate({
        // some code
    }, 1500 ).animate({
        // some code
    }, 1500 );
	$(".check3b:checked").prev().prev().addClass("rotate");
});

/*Анимации подпрыгивания*/
$(document).on("click", '[type="radio"]', function() {
	$(".check4b").prev().prev().removeClass("animated bounce");
	$(".check4a:checked").prev().animate({
        marginTop: "-=30px",
    }, 300 ).animate({
        marginTop: "+=30px",
    }, 250 ).animate({
        marginTop: "-=20px",
    }, 200 ).animate({
        marginTop: "+=20px",
    }, 150 ).animate({
        marginTop: "-=10px",
    }, 100 ).animate({
        marginTop: "+=10px",
    }, 50 );
	$(".check4b:checked").prev().prev().addClass("animated bounce");
});

/*Анимации*/
$(document).on("click", '[type="radio"]', function() {
	$(".check5b").prev().prev().removeClass("opacity");
	$(".check5a:checked").prev().animate({
        opacity: "0"
    }, 500 ).animate({
        opacity: "0.9"
    }, 500 ).animate({
        opacity: "0"
    }, 500 ).animate({
        opacity: "0.8"
    }, 500 ).animate({
        opacity: "0"
    }, 500 ).animate({
        opacity: "0.7"
    }, 500 ).animate({
        opacity: "0"
    }, 500 ).animate({
        opacity: "0.6"
    }, 500 ).animate({
        opacity: "0"
    }, 500 ).animate({
        opacity: "0.5"
    }, 500 ).animate({
        opacity: "0"
    }, 100 ).animate({
        opacity: "0.6"
    }, 100 ).animate({
        opacity: "0"
    }, 100 ).animate({
        opacity: "0.7"
    }, 100 ).animate({
        opacity: "0"
    }, 100 ).animate({
        opacity: "0.8"
    }, 100 ).animate({
        opacity: "0"
    }, 100 ).animate({
        opacity: "0.9"
    }, 100 ).animate({
        opacity: "0"
    }, 100 ).animate({
        opacity: "1"
    }, 100 );
	$(".check5b:checked").prev().prev().addClass("opacity");
});

/*Анимации выезда за траницу*/
$(document).on("click", '[type="radio"]', function() {
	$(".check6b").prev().prev().removeClass("dissap");
	$(".check6a:checked").prev().animate({
        marginRight: "-500px",
    }, 1500 ).animate({        
		marginRight: "32%",
    }, 1500 );
	$(".check6b:checked").prev().prev().addClass("dissap");
});