//getting access to the userInput 
const userInput = document.getElementById("userInput");
var expression = '';

//gg to grab the user input and concat to this exp variable
function press(num) {
    expression += num;
    userInput.value = expression;
}

function equal() {
    userInput.value = eval(expression);
    expression = '';
}

//ask why the .value doesnt work??