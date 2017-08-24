function randomNumber(supply){
  var randomizer = Math.floor( Math.random() * supply ) + 1;
  return randomizer;
}

var timeLeft = 0;

while (timeLeft < 10){
  var getRandom = randomNumber(10);
  document.write(getRandom + ' ');
  timeLeft += 1;
}
