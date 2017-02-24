// *****SANDWICH MAKER JS*****

// -The ingredient choices should be stored as JS objects that contain the ingredients 
// as keys and their cost as the value. {"turkey": 0.90, "bacon": 1.50}

var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice) {
      totalPrice += toppingPrice;
    }
  };
})();