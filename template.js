$(document).ready(
    function () {
        //event handlers
        $("#totalCosts").click(calculatePizzaCost);

        //other functions
        function  calculatePizzaCost()
        {
            //get all input from boxes and parse to number data type

            var people = $("#numberOfPeople").val();
            people = parseFloat(people);

            var toppings = $("#numberOfToppings").val();
            toppings = parseFloat(toppings);

            //calculate cost of pizza and cost per person

            var costForPizza = (toppings * 1.25) + 15.00;

            var costPerPerson = costForPizza / people;

            //put output into paragraphs

            $("#pizzaCostOutput").text(`The total cost for pizza is ${costForPizza.toFixed(2)}`);

            $("#perPersonOutput").text(`The cost per person is ${costPerPerson.toFixed(2)}`);

            $(".output").show();
        }
    }
);