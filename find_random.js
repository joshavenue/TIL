var number = prompt('Enter a number');
var randomizer = makeRandom(number);
var guess;
var attempts = 0;

function makeRandom(number){
  return Math.floor(Math.random() * number) + 1;
}

while( guess !== randomizer && guess == number){
  guess = makeRandom(number);
  attempts += 1;
}
document.write(randomizer);
document.write('<p> </p>');
document.write(attempts);
