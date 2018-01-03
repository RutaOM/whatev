var person = new Vue({
	el: "#duomenys",
	data:{
		name: "Jusu vardas",
		surname: "Jusu pavarde",
		age: "Nezinomas",

},

methods: {
	greet: function(name){
		alert('labuka'+name+'!');
	}
}
})

