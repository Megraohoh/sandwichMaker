// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"turkey": 1.00, "chicken": 1.00, "no meat": 0.00};

  // Augment the original object with another method
  maker.addMeat = function(meatSelection) {
    return meatPrices[meatSelection];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);