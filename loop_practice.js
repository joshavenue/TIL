function getRandom(lucky){
  var randomizer = Math.floor(Math.random() * lucky) + 1;
  return randomizer;
}

var counter = 0;
var putNum = prompt('Enter a number : ');

while (counter < 10){
  var rand = getRandom(putNum);
  document.write(rand + ' -- ')
  counter += 1;
}
