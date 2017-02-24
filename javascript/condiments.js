// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentsPrices = {"mayo": 0.10, "honey mustard": 0.10, "no condiments", 0};

  // Augment the original object with another method
  maker.addCondiments = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);