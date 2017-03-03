// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var cheesePrice = {"provolone": 1.00, "swiss": 1.00, "no cheese": 0};

  // Augment the original object with another method
  maker.addCheese = function(cheeseSelection) {
    return cheesePrice[cheeseSelection];

  };


  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);