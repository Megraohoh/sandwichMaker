// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var vegetablesPrice = {"lettuce": 0.10, "tomato": 0.10, "no vegetables": 0};

  // Augment the original object with another method
  maker.addVegetables = function(vegetablesSelection) {
    return vegetablesPrice[vegetablesSelection];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);