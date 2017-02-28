// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrices = {"provolone": 0.75, "swiss": 0.75, "no cheese": 0};

  // Augment the original object with another method
  maker.addCheese = function(cheeseSelection) {
    return cheesePrices[cheeseSelection];

  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);