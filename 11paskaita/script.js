var heading = "This is heading";
var paragraph = "This is paragraph";

document.getElementById("main-heading").innerHTML = heading;
document.getElementById("main-paragraph").innerHTML = paragraph;

//pakeiciame teksto spalva uzvedus pele
function changeColor(){
	document.getElementById("main-heading").style.color = "blue";
}

//pakeicia paragrafo teksto dydi

function changeSize(){
	document.getElementById("main-paragraph").style.fontSize = "20px";
}

//sukurti elementa, naudonatis tik js. isidet i kintamaji +f-cija ir nurodyti i kur (body)

var mygtukas = document.createElement("button");
document.body.appendChild(mygtukas);

//sukurti ir uzdeti teksta mygtukui

var buttonText = document.createTextNode("Press me!");
mygtukas.appendChild(buttonText);

//sukurti ir uzdeti mygtukui onclick atribbuta
//parasyti f-cija, kuri paslepia h1 teksta

mygtukas.id = "btn-hide";
document.getElementById('btn-hide').onclick = function(){
	document.getElementById("main-heading").style.visibility = "hidden";
}

//Sukurti mygtuka, kuris pakeicia paragrafo fonto dydi, fonto spalva ir paragrafo backgroundo spalva

var anotherParagraph = "This is another paragraph";
document.getElementById("another-paragraph").innerHTML = anotherParagraph;

var mygtukas1 = document.createElement("button");
document.body.appendChild(mygtukas1);

mygtukas1.id = "mygtukas-pakeicia-stiliu";
document.getElementById('mygtukas-pakeicia-stiliu').onclick = function(){
	var el = document.getElementById('another-paragraph');
	el.style.fontSize = "50px";
	el.style.color = "red";
	el.style.backgroundColor = "green";
}

/*susikurti forma, (html faile) su id nforma. 
ji turi tureti du inputo laukus, viena vardui, 
kita pavardei ir mygtuka submit. parasyti koda, 
kuris paraso i konsole varda ir pavarde*/
function print(){
	document.write(document.forms['nforma']['firstname'].value+' '+document.forms['nforma']['lastname'].value);
	}

//parasyti f-cija,kuri gauna is vartotojo ivedima lenteles eiluciu skaiciaus ir atitinkai sukurti lentele.




