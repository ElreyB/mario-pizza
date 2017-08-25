// Business Logic
function Costumer(name){
  this.name = name;
  this.order = [];
}

function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
}

function sizeCost(size){

}

Pizza.prototype.toppingsCost = function() {
  return this.toppings.reduce((sum) =>  sum + 1, 0);
};

Pizza.prototype.sizeCost = function(){
  var cost = 5;
  switch(this.size) {
    case "Small":
      return (cost - 2);
    case "Large":
      return (cost + 1);
    case "Extra Large":
      return (cost + 2);
    default:
      return cost;
  }
};

Pizza.prototype.totalCost = function(){
  return `$${this.toppingsCost() + this.sizeCost()}.00`
}


// User Interface Logic

$(document).ready(function(){
  $("form#order-form").submit(function(event){
    event.preventDefault();
    var nameInput = $("input.name").val();
    var sizeInput = $("select.size").val();
    var toppingsInput = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
       var allToppings = $(this).val();
       toppingsInput.push(allToppings);
     });

    var newCostumer = new Costumer(nameInput);
    var newPizza = new Pizza(sizeInput, toppingsInput);

    newCostumer.order.push(newPizza);







    //Spec test for input
    // $(".receipt").append(`${nameInput}<br>${sizeInput}<br>`);
    // console.log(newCostumer);
    // console.log(newCostumer.order);
    // console.log(newCostumer.order[0]);
    // console.log(newCostumer.order[0].toppings);
    // console.log(newCostumer.order[0].sizeCost());
    // console.log(newCostumer.order[0].toppingsCost());
    // console.log(newCostumer.order[0].totalCost());

  });
});
