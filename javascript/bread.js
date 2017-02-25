// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrice = {"wheat": 1.00, "white": 1.00, "no bread": 0};

  // Augment the original object with another method
  maker.addBread = function() {
  
  };
  
  maker.getBread = function() {	
    return ;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);