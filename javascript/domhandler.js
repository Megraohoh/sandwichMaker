// ******BREAD SELECTION TO DOM******


var breadChooser = document.getElementById("breadChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

breadChooser.addEventListener("change", function(event) { //change event says which was selected
	var whichBread = SandwichMaker.addBread(event.target.value);
	// console.log(whichBread);

	SandwichMaker.setTotalPrice(whichBread);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();
})



// ******MEAT SELECTION TO DOM******


var meatChooser = document.getElementById("meatChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

meatChooser.addEventListener("change", function(event) {
	var whichMeat = SandwichMaker.addMeat(event.target.value);
		// console.log(whichMeat);

	SandwichMaker.setTotalPrice(whichMeat);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	
})




// ******CHEESE SELECTION TO DOM******


var cheeseChooser = document.getElementById("cheeseChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

cheeseChooser.addEventListener("change", function(event){
	var whichCheese = SandwichMaker.addCheese(event.target.value);
		// console.log(whichCheese);

	SandwichMaker.setTotalPrice(whichCheese);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	
})



// ******CONDIMENTS SELECTION TO DOM******

var condimentsChooser = document.getElementById("condimentsChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

condimentsChooser.addEventListener("change", function(event){
	var whichCondiment = SandwichMaker.addCondiments(event.target.value);
		// console.log(whichCondiment);

	SandwichMaker.setTotalPrice(whichCondiment);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	

})


// ******VEGETABLES SELECTION TO DOM******


var vegetablesChooser = document.getElementById("vegetablesChoice");
var sandwichHolder = document.getElementById("sandwichHolder");

vegetablesChooser.addEventListener("change", function(event){
	var whichVegetable = SandwichMaker.addVegetables(event.target.value);
		// console.log(whichVegetable);

	SandwichMaker.setTotalPrice(whichVegetable);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();	
})




  // Get the value chosen from the DOM
  // selectedTopping = event.target.value;

  // breadChoice = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
// });