var randomNum = getNumRand(10);
var guess;
var guessCount = 0;
var correctGuess = false;


function getNumRand(upper){
  var num = Math.floor(Math.random() * upper) + 1;
  return num;
}

while ( guessCount < 10 ){
  guess = prompt('What are the number in your mind?');
  guessCount += 1;
  if(parseInt(guess) === randomNum){
    correctGuess = true;
    
    break;
  }
}
if ( correctGuess ){
  document.write("Good!");
  document.write('You took ' + guessCount + ' times to guess ' + randomNum);
}else{
  document.write('Opps, too bad.')
}
