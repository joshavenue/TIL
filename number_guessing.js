var putNum = prompt('Put a lucky number between 1 - 10.');
var randomNum = getRandom(putNum);
var guess;
var counter = 0;
var guessAnswer = false; // The system assumes all input is false //

function getRandom(upper){
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

do{
  guess = prompt('Guess what number I am thinking.');
  counter += 1;
  if(parseInt(guess) === randomNum){
    guessAnswer = true; // When the guess is correct, the system will run this code and turn everything true //
  }
} while( ! guessAnswer ) // ! stands for opposite of the boolean. if ! true will be false and vice versa //
document.write('You took ' + counter + ' guesses to guess the number of ' + randomNum);
