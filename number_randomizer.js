alert("Rules : Select 2 numbers, later, guess which numbers will be the biggest number.")

var inputFirst = prompt("First number");
var firstInput = parseInt(inputFirst);

var inputSecond = prompt("Second number");
var secondInput = parseInt(inputSecond);

var rangeMathOne = Math.floor(Math.random() * firstInput) + 1;
var rangeMathTwo = Math.floor(Math.random() * secondInput) + 1;

if (firstInput === secondInput){
    alert("Please do not choose the similar numbers!");
}

prompt("Which number do you think will lead? " + firstInput + ' or ' + secondInput + '?');

if (rangeMathOne > rangeMathTwo){
    document.write('The first number ' + firstInput + ' Is bigger than ' + inputSecond + ' after being randomized.');
}else{
    document.write('The first number ' + firstInput + ' Is lower than ' + inputSecond + ' after being randomized.');
}

document.write("<p> </p>");
document.write(firstInput + ' is now ' + rangeMathOne);
document.write("<p> </p>");
document.write(secondInput + ' is now ' + rangeMathTwo);



