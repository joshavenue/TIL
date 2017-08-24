var numberOne;
var numberTwo;
var numberThree;

numberOne = Math.floor(Math.random() * 9) + 1;
numberTwo = Math.floor(Math.random() * 9) + 1;
numberThree = Math.floor(Math.random() * 9) + 1;

var guess1 = prompt('Choose your first guess. ONE number only.');
var guess2 = prompt('Choose your second guess. ONE number only.');
var guess3 = prompt('Choose your third guess. ONE number only.');

if (parseInt(guess1) === parseInt(numberOne) && parseInt(guess2) === parseInt(numberTwo) && parseInt(guess3) === parseInt(numberThree)) {
    document.write('Smart guess. All correct.');
}else if(parseInt(guess1) === parseInt(numberOne) && parseInt(guess2) !== parseInt(numberTwo) && parseInt(guess3) !== parseInt(numberThree)) {
    document.write('Two wrong');
}else if(parseInt(guess1) !== parseInt(numberOne) && parseInt(guess2) !== parseInt(numberTwo) && parseInt(guess3) === parseInt(numberThree)){
    document.write('Two wrong');
}else if(parseInt(guess1) !== parseInt(numberOne) && parseInt(guess2) === parseInt(numberTwo) && parseInt(guess3) !== parseInt(numberThree)) {
    document.write('Two wrong');
}else if(parseInt(guess1) === parseInt(numberOne) && parseInt(guess2) === parseInt(numberTwo) && parseInt(guess3) !== parseInt(numberThree)){
    document.write('One wrong');
}else if(parseInt(guess1) === parseInt(numberOne) && parseInt(guess3) === parseInt(numberThree) && parseInt(guess2) !== parseInt(numberTwo)){
    document.write('One wrong');
}else if(parseInt(guess2) === parseInt(numberOne) && parseInt(guess3) === parseInt(numberThree) && parseInt(guess1) !== parseInt(numberOne)) {
    document.write('One wrong');
}else{
    document.write('All wrong.');
}

document.write('<p> </p>');
document.write('The answer is ' + numberOne + ' ' + numberTwo + ' ' + numberThree);
document.write('<p> </p>');
document.write('You picked ' + guess1 + ' ' + guess2 + ' ' + guess3);
