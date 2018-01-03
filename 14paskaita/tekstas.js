var paragraphElement = document.getElementById('change-size');
var bgElement = document.getElementById('change-color');
var stylesJSON = localStorage.getItem("styles"); //apsirasysim issaugiojima pavadinimu styles, reik paims style, kad galetumem uzsetint stiliu
var stylesObj = JSON.parse(stylesJSON);//pasikeiciam stiliu, kad galima butu dirbti su JS

	if (stylesObj === null){ //jei nera nustatyta jokiu, stiliu, tai reik surasyti kokius tsiliu gauna puslapis
			var bgcolor = window.getComputedStyle(bgElement, null).
				getPropertyValue('background-color');
			var textsize= window.getComputedStyle(paragraphElement, null).
				getPropertyValue('font-size');

				stylesObj = {
			"bgcolor": bgcolor,
			"textsize": textsize
		}
	}

window.addEventListener("load", setStyles(stylesObj));

	function setStyles(stylesObj){
		paragraphElement.style.fontSize = stylesObj.textsize; //jei nebuvo pries tai issaugotu stiliu
		bgElement.style.backgroundColor = stylesObj.bgcolor;
	}

function makeLarger(){
	var style = window.getComputedStyle(paragraphElement, null).getPropertyValue('font-size'); //galima paimti konkretaus elemento css stiliu
	var currentSize = parseInt(style); //jei css parasyta 20px jis ji gauna kaip stringa tada bus 20 px +5.reikia stiliu pavesti i skaiciu
	currentSize += 10;
	paragraphElement.style.fontSize = currentSize + "px";

	var size = currentSize + "px";
	stylesObj.textsize = size;
	saveStyles(stylesObj); //fcija apacioj

}
function makeSmaller(){
	var style = window.getComputedStyle(paragraphElement, null).getPropertyValue('font-size'); //galima paimti konkretaus elemento css stiliu
	var currentSize = parseInt(style); //jei css parasyta 20px jis ji gauna kaip stringa tada bus 20 px +5.reikia stiliu pavesti i skaiciu
	currentSize -= 10;
	paragraphElement.style.fontSize = currentSize + "px";

	var size = currentSize + "px";
	stylesObj.textsize = size;
	saveStyles(stylesObj); //fcija apacioj
}
function makeGreen(){
	if (bgElement.style.backgroundColor == "green"){
		bgElement.style.backgroundColor = "white";
		stylesObj.bgcolor = "white";
		saveStyles(stylesObj); //fcija apacioj
}else
	{bgElement.style.backgroundColor = "green";
	stylesObj.bgcolor = "green";
		saveStyles(stylesObj); //fcija apacioj
	}
}

function maketeal(){
	if(bgElement.style.backgroundColor == "teal"){
	bgElement.style.backgroundColor = "white"
	stylesObj.bgcolor = "white";
	saveStyles(stylesObj); //fcija apacioj
}else
	{bgElement.style.backgroundColor = "teal";
	stylesObj.bgcolor = "teal";
		saveStyles(stylesObj); //fcija apacioj
	}
}

function saveStyles(stylesObj){
	localStorage.setItem("styles",JSON.stringify(stylesObj)); //local storage issaugom
}