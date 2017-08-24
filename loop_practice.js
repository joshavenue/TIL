function getRandom(lucky){
  var randomizer = Math.floor(Math.random() * lucky) + 1;
  return randomizer;
}

var counter = 0;
var putNum = prompt('Enter a number : ');
var putCounter = prompt('How many numbers you need? ')

while (counter < putCounter){
  var rand = getRandom(putNum);
  document.write(rand + ' ')
  counter += 1;
}
