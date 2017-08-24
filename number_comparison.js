function max(num1, num2){
  if(num1 > num2){
    return num1;
  }else{
    return num2;
  }
}

var numberOne = parseInt(prompt("ONE"));
var numberTwo = parseInt(prompt("TWO"));

if(Number(numberOne) > Number(numberTwo)){
  document.write('The number ' + numberOne + ' is larger than ' + numberTwo);
}else{
  document.write('The number ' + numberTwo + ' is larger than ' + numberOne);
}

document.write('<p> </p>');
document.write(max(numberOne, numberTwo));

// using function to compare two input value of A & B //
