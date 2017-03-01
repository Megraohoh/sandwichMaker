var selectedTopping;

var finalSandwichTotal = 0;


// ******BREAD SELECTION TO DOM******

var breadChooser = document.getElementById("breadChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

breadChooser.addEventListener("change", function(event) { //change event says which was selected
	// var whichBread = SandwichMaker.addBread(event.target.value);
	selectedTopping = event.target.value;
	var toppingPrice = SandwichMaker.addBread(selectedTopping); 
	if (event.target.checked === true) { //checked bc of the checkbox is checked :P
	SandwichMaker.setTotalPrice(toppingPrice);
	} else {
		SandwichMaker.removeTopping(toppingPrice);
	}
});



// ******MEAT SELECTION TO DOM******


var meatChooser = document.getElementById("meatChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

meatChooser.addEventListener("change", function(event) {
	var whichMeat = SandwichMaker.addMeat(event.target.value);
		

	SandwichMaker.setTotalPrice(whichMeat);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	
})




// ******CHEESE SELECTION TO DOM******


var cheeseChooser = document.getElementById("cheeseChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

cheeseChooser.addEventListener("change", function(event){
	var whichCheese = SandwichMaker.addCheese(event.target.value);
		
	SandwichMaker.setTotalPrice(whichCheese);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	
})



// ******CONDIMENTS SELECTION TO DOM******


var condimentsChooser = document.getElementById("condimentsChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

condimentsChooser.addEventListener("change", function(event){
	var whichCondiment = SandwichMaker.addCondiments(event.target.value);
		

	SandwichMaker.setTotalPrice(whichCondiment);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	

})


// ******VEGETABLES SELECTION TO DOM******



var vegetablesChooser = document.getElementById("vegetablesChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

vegetablesChooser.addEventListener("change", function(event){
	var whichVegetable = SandwichMaker.addVegetables(event.target.value);
		

	SandwichMaker.setTotalPrice(whichVegetable);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	
})


//*****BUTTON*****

var runButton = document.getElementById("btn");
runButton.addEventListener("click", function(){
	var finalSandwichTotal = SandwichMaker.getTotalPrice();
	document.getElementById("sandwichHolder").innerHTML = "Sandwich Total: $" + finalSandwichTotal;
})

