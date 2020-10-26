function calculatePizzaCost()
{
    //get number of people splitting pizza
    var numberPeeps = prompt("How many people will be sharing this pizza?");

    //convert to number
    numberPeeps = parseFloat(numberPeeps);

    //get number of toppings
    var totalAdditions = prompt("How many toppings are you adding to the pizza?");

    //convert to number
    totalAdditions = parseFloat(totalAdditions);

    //multiply number of toppings by $1.25 and add $15.00
    var costForPizza = (totalAdditions * 1.25) + 15.00;

    //divide the total cost of the pizza by the number of people splitting the cost
    var totalPerPerson = costForPizza / numberPeeps;

    //display total cost
    alert("The total cost for this pizza is $" + costForPizza.toFixed(2));

    //display total per person
    alert("The total per person is $" + totalPerPerson.toFixed(2))
}