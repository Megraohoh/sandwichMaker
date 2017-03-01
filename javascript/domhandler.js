var breadChooser = document.getElementById("breadChoice");
var sandwichHolder = document.getElementById("sandwichHolder");
breadChooser.addEventListener("change", function(event) { //change event says which was selected
	// console.log(event);
	var boogers = SandwichMaker.addBread(event.target.value);
	console.log(boogers);

	SandwichMaker.setTotalPrice(boogers);
	sandwichHolder.innerHTML = SandwichMaker.getTotalPrice();
})

// var meatChooser = document.getElementById("meatChoice");
// meatChooser.addEventListener("change", function(event) {
// }




  // Get the value chosen from the DOM
  // selectedTopping = event.target.value;

  // breadChoice = event.target.value;

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
// });