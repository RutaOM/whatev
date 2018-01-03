//parasyti cikla while, kuriame prasoma vartotojo ivesti duomenis, tol kol jis neiveda zodzio stop (ivedus baigiasi).

/*while(ivestis != 'stop'){
	var ivestis = prompt('iveskite duomenis ir parasykite stop');
	console.log(ivestis);
}*/


//kad i kiekviena ivedima idetu masyva:
//naudojantis ciklu while atspausdinti is masyvos visus jo elementus:

/*var mas = [];

while(ivestis != 'stop'){
	var ivestis = prompt('iveskite duomenis ir parasykite stop');
	mas.push(ivestis);
	
}
console.log(mas);*/
//arba

/*var i = 0;
while(i < mas.length){
	console.log(mas[i]);
	i++
}*/
//parasyti programa, kuri tikrina pirma ir antra vartotojo ivedimus ir pasako, ar vartotojas ivede ta pati pirmame ir antrame ivedime.
/*var ivestisa = prompt('iveskite duomenis: ');
var ivestisb = prompt('pakartokite duomenis: ');

while(ivestisa != ivestisb){
	console.log('ivesti skirtingi duomenys');
	ivestisa = prompt('iveskite duomenis: ');
	ivestisb = prompt('pakartokite duomenis: ');  //be var!

}	console.log('ivesti duomenys sutampa');*/


//parsayti programa, kur vartotojas iveda kiek kartu vykdyti while cikla ir atspausdinti kiekvieno ciklo iteracija(pvz jei iveda 3, 
//tai konsoleje turetu spausdinti 123)

/*var ivestis = prompt("iveskite kiek kartu vykdyti cikla");
	var i = 1;
	while(i<=ivestis){
		console.log(i);
		i++;
	}*/

	//f -ija atspausdina sk kvadrata
/* square(8);
 square(9);*/

// var ivestis = prompt('iveskite skaiciu, kuri norite pakelti kvadratu');

 /*var kvardratas = square()

 square(ivestis);
	function square(x){
		return(x*x);
	}

	/turi atspausdinti ar skaicius yra lyginis*/


/*function lyginis(x){
	if(x%2 == 0){
		console.log(x+'lyginis')
}else{
	console.log(x+'nelyginis')
}
}
lyginis(1);
lyginis(2);*/


/*var ivestis = prompt('iveskite lygini arba nelygini skaiciu');

console.log(lyginis(ivestis));

function lyginis(x){
	if(x%2 == 0){
		return 'lyginis'
}else{
	return 'nelyginis'
}
}*/

//f-cija, kuri praso varda ji ivedus

/*var ivestis = prompt('iveskite varda');


greetings(ivestis);

function greetings(n){
	console.log('Labas, '+n)
		alert('labas '+n);


}*/
////console.log('Labas, '+ivestis);
//look for scopes




/*function pakeltiKvadratu(){
var a = document.getElementById('nmb').value;	//reiksme, kad irasyta i lauka
		console.log(a+'x'+a+'='+a*a);
		spausdink(a);
}
function spausdink(a){
	var element = document.getElementById('print');
	element.innerHTML = '<h3>Jusu rezultatas yra: '+a*a+'</h3>';
}*/


/*var a = prompt('iveskite skaiciu');
var b = prompt('iveskite skaiciu');
suma(a,b);
var gaunasi = suma;

function suma(x,y){
	console.log(parseInt(x)+parseInt(y)); //prseint reikia, nes supranta kaip zodi
}*/

//f=cija su skirtumu ir kad is didesnio atimti mazesni


/*var ivestis1 = prompt('iveskite 1 skaiciu');
var ivestis2 = prompt('iveskite 2 skaiciu');

skirtumas(ivestis1,ivestis2);

function skirtumas(a,b){
	if(a>b){
	console.log(parseInt(a-b))
}else{
	console.log(parseInt(b-a));
}
}*/


//su return:
/*var ivestis1 = prompt('iveskite 1 skaiciu');
var ivestis2 = prompt('iveskite 2 skaiciu');

skirtumas(ivestis1,ivestis2);

function skirtumas(a,b){
	if(a>b){
	return parseInt(a-b);
}else{
	return parseInt(b-a);
}
}
console.log(skirtumas(ivestis1,ivestis2));*/

//16 paskaita
//f-cija su daugyba ir dalyba

/*var ivestisa = prompt('iveskite pirmaji skaiciu');
var ivestisb = prompt('iveskite antraji skaiciu');

daugyba(ivestisa,ivestisb);
function daugyba(x,y){
	if(x>y){
		return (x/y).toFixed(2);
	}else{
		return (y/x).toFixed(2);
	}
}
console.log(daugyba(ivestisa,ivestisb));*/


var ivestisa = prompt('iveskite pirmaji skaiciu');
var ivestisb = prompt('iveskite antraji skaiciu');

daugyba(ivestisa,ivestisb);
function daugyba(x,y){
		return x*y;
}
console.log(daugyba(ivestisa,ivestisb));