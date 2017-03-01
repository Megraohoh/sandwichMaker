// *****SANDWICH MAKER JS*****

var SandwichMaker = (function() {

  var totalPrice = 0;

  return {
    getTotalPrice: function() {
      return totalPrice;

      },

    removeTopping: function(toppingPrice) {
    	totalPrice -= toppingPrice;
      },  

    setTotalPrice: function(toppingPrice) {
    	totalPrice += toppingPrice;
    	return totalPrice
      }  
  
  };


})();