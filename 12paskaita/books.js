var authorElement = document.querySelector('#author'); //paselektina pirma sutikta id elementa
var titleElement = document.querySelector('#title');
var publisherElement = document.querySelector('#publisher');
var dateElement = document.querySelector('#date');
var descriptionElement = document.querySelector('#description');

//cia saugom visas ivestas knygas

var booksJSON = localStorage.getItem("books"); //turesim pasiimti knyga is localstorage
var bookList = JSON.parse(booksJSON); 

if(bookList == null){ //jei nera ne vienos knygos - sukurk tuscia masyva, kai kazkada bus issaugotos knygos
	bookList = []
}


var addBookButton = document.querySelector(".btn-save-book");

addBookButton.addEventListener("click", addBook);

function addBook(){
	var author = authorElement.value;
	var title = titleElement.value;
	var publisher = publisherElement.value;
	var date = dateElement.value;
	var description = descriptionElement.value;

	if(!author || !title || !publisher || !date || !description){
		alert("Neuzpildyti visi laukeliai");
		return;

	}


	var record = {
		"author": author,
		"title": title,
		"publisher": publisher,
		"date": date,
		"description": description
	}
//patikriname ar knyga jau toka yra
	if(checkForDuplicates(record)){
		alert("Tokia knyga jau irasyta");
		return;
	}

	bookList.push(record);
	booksJSON = JSON.stringify(bookList); //gauta knyga perrasyk json formatu/papildymas
	localStorage.setItem("books", booksJSON);

	renderBooks();
	clearForm();

	document.getElementById('screen').style.display = 'none';
}

var clearButton = document.querySelector(".btn-clear-form");

clearButton.addEventListener("click", clearForm);

function clearForm(){
	authorElement.value = "";
	titleElement.value = "";
	publisherElement.value = "";
	dateElement.value = "";
	descriptionElement.value = "";
}

var formElement = document.querySelector(".library-form");

//kad nekurtu dublikatu

function checkForDuplicates(record){
	var isDuplicate = false;

	bookList.forEach(function(item){
		if(item.author == record.author && item.title == record.title && item.date == record.date){
			isDuplicate = true;
		}
	});
	return isDuplicate;
}

function renderBooks(){

	if(!bookList) return; //jei tuscias masyvas-iseik
	var result = "";

	for(var book of bookList){  //naujas! nebe lauko pavad, o ima reiksme in ima is kaires, o sitas reiksme
		result += `<div class="book clearfix">
		<span onclick="openModal(this.id)" style="cursor:pointer;" id="${book.title}">
					<h2>${book.author}</h2> 
					<h3>${book.title}</h3>
					<p>Isleido: ${book.publisher}</p>
					<date>${book.date}</date>
					<p>Aprasymas:${book.description}</p>
					</div>
					<hr>


		`/*riestiniuose rasom kintamojo reiksme*/
			;

	}
	var bookListElement = document.querySelector(".book-list");
	bookListElement.innerHTML = result;
}

function openModal(clicked_id){ //galim susigalvoti varda parametrui kaip ir f-cijai
	var book = findElement(clicked_id);
	document.getElementById('screen-item').style.display = 'block';
	var result = `
					<div class="modal-screen" onclick="event.stopPropagation();">
						<header class = "popup-container">
							<h2>${book.author}${book.title}</h2>
							</header>
							<hr>
							<div class = "popup-container">
							<h4>Leidykla: ${book.pubisher}</h4>
							<h4>Data: ${book.date}</h4>
							<p><h4>${book.description}</p>
					</div>
					<footer class = "popup-container">
					<button type = "button"  class="btn btn-primary" onclick="document.getElementById('screen-item').style.display = 'none'">Uzdaryti</button>
					</footer> 
					</div>`

		document.getElementById('screen-item').innerHTML = result;

}

function findElement(bookName){
	var count = 0;
	for(book of bookList){
		if(book.title == bookName){
			return book;
		}
		count++;
	}




}
//pakrauna visas knygas, kurios irasytos:
renderBooks();

