// create a random generator with boundary using function and boolean //

function numberGenerate(a,b,c){
  var generate = Math.floor(Math.random() * c) + 1;
  var condition1 = Number(a) < Number(generate);
  var condition2 = Number(b) > Number(generate);

  if(condition1 && condition2){
    alert("Your number now is " + generate + " and it is between " + a + " and " + b);
  }else{
    alert("Your number now is " + generate + " and it is between " + a + " and " + b + ". Which is out of the zone.");
  }
}

var numOne = prompt('Enter your first number.');
var numTwo = prompt('Enter your second number');
var numRandom = prompt('Enter a number to generate');

numberGenerate(numOne, numTwo, numRandom);
