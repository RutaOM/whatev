//17 paskaita
//f-cija su daugyba ir dalyba

/*var ivestisa = prompt('iveskite pirmaji skaiciu');
var ivestisb = prompt('iveskite antraji skaiciu');

dalyba(parseInt(ivestisa),(ivestisb));

function dalyba(x,y){
	if(x>y){
		return (x/y).toFixed(2);
	}else{
		return (y/x).toFixed(2);
	}
}
console.log(dalyba(parseInt(ivestisa),(ivestisb)));*/


/*var ivestisa = prompt('iveskite pirmaji skaiciu');
var ivestisb = prompt('iveskite antraji skaiciu');

daugyba(ivestisa,ivestisb);
function daugyba(x,y){
		return x*y;
}
console.log(daugyba(ivestisa,ivestisb));*/

//f-cijos "konstruktoriai". Fcijos argumentus galim priskirineti objektui.
	var vardas = document.querySelector('#katesVardas');
	var amzius = document.querySelector('#katesAmzius');
	var spalva = document.querySelector('#katesSpalva');
	var veisle = document.querySelector('#katesVeisle');



function Cat(name, age, color, breed){
	this.vardas = name;
	this.amzius = age;
	this.spalva = color;
	this.veisle = breed; 
	
	
	//this.getName = function(){return this.vardas};
}
function SpausdintiKates(){
	var randomCat = new Cat(vardas.value,amzius.value,spalva.value,veisle.value);
	var ReikalingasSpausdinant = document.getElementById('print');
	ReikalingasSpausdinant.innerHTML = '<h3>Jusu naujos kates vardas: '+ randomCat.vardas+', amzius: '+randomCat.amzius+', spalva: '+randomCat.spalva+' ir veisle: '+randomCat.veisle+'.</h3>';
	}



/*var cat1 = new Cat("Murkis",12,"Ryzas","Lietuvos ryzasis");
var cat2 = new Cat("Raine",6,"Pilka","Siamo");*/


//console.log(cat1);
/*console.log(cat2);*/

//console.log(randomCat);