// *****SANDWICH MAKER JS*****

var SandwichMaker = (function() {

  var totalPrice = 0;

  return {
    getTotalPrice: function() {
      return totalPrice;

      },

    setTotalPrice: function(toppingPrice) {
    	totalPrice += toppingPrice;
      }  
  
  };


})();