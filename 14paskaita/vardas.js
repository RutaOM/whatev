var vardasEl = document.querySelector ('#name');
var pavardeEl = document.querySelector('#surname');
var slaptazodisEl = document.querySelector('#password');
var prisijunk = [];
var idpavJSON = localStorage.getItem("idpav");
var prisijunk = JSON.parse(idpavJSON); 

if(prisijunk === null){ 
	prisijunk = []
}

 

var addMygtukas = document.querySelector(".mygtukas");
addMygtukas.addEventListener("click", prideti);

function prideti(){
	var vardas = vardasEl.value;
	var pavarde = pavardeEl.value;
	var slaptazodis = slaptazodisEl.value;
	console.log(vardas);
		var irasyk = {
		"vardas":  vardas,
		"pavarde": pavarde,
		"slaptazodis": slaptazodis
	}
	if(checkForDuplicates(irasyk)){
		alert("Toks vartotojas jau yra");
		return;
	

	}


	if(!vardas || !pavarde || !slaptazodis){
		alert("Neuzpildyti visi laukeliai");
		return;


	}


	prisijunk.push(irasyk);
	idpavJSON = JSON.stringify(prisijunk); //gauta knyga perrasyk json formatu/papildymas
	localStorage.setItem("idpav", idpavJSON);

}

function checkForDuplicates(irasyk){//boolean true1 ar false0 
	var isDuplicate = false;
	console.log(irasyk);
	prisijunk.forEach(function(item){
		console.log(item);
		if(item.vardas == irasyk.vardas && item.pavarde == irasyk.pavarde){
			isDuplicate = true;
		}
	});
	return isDuplicate;
}

//if(0){ tas pats kas false
//if(""){ tas pats kas falese
	//js kalboje tipai yra suprantami kaip misrus
// masyvas
//var arr = []
//i masyvus galima deti viska
//masyva paseikiam arr1 [0;2;tt]
//armasyvus naudojam for'uose.
//console.log(arr1[i]);-kreipimasis i masyva
//arr.filter();
//arr.sort();
//unicode table
//push. iterpia elementus i masyvo pabaiga.
//developer.mozzila.
//var objektas= {zymimas riestiniais skliaustais}
/*jei notrim is naksti priskirti laukus:
var objektas = {
	name: "abc"
}
objektas.nmae (oekto pavadinimas.lauko vardas);
galim objektui suskurti nauja lauka.
objektas1.pavarde = "bca";
name:"abx";
pavarde:"bca";

svarbus kalbleiai, ant askuirnio nededeam. galim sursyt i eilute. objekto laukai gali but bt kokio tipo. 
var objektuMasyva = [{
name: "a",
pavarde: "a"
},

kreipaime:
objektumasyvas[0].name

masyvai gali buti dvimaciai. 
crm- vidinis imones intranetas
objektas gali buti objekte.

var objektasObjekte = {
	name: "Jonas",

	childdren: {name:"dovydas",
	pavarde: "jonaitis"

	objektasObjekte.children.name = -vaiko vardas bus-

	Objektas, kurio laukas yra masyvo laukas

	var obj = {
	children:[{*/


	