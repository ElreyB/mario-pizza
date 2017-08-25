// Business Logic
function Costumer(name){
  this.name = name;
}

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

function sizeCost(size){
  var cost = 5;
  switch(size) {
    case "Small":
      return (cost - 2);
    case "Lager":
      return (cost + 1);
    case "Extra larger":
      return (cost + 2);
    default:
      return cost;
  }
}
function toppingsCost(toppings){
  var cost = 0;
  toppings.reduce((sum, topping) => cost = sum + 1, cost);
  return cost;
}

Pizza.prototype.toppingsCost = function(toppings){
 return toppingsCost(toppings);
};

Pizza.prototype.sizeCost = function(size){
  return sizeCost(size);
};
