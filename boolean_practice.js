function testCondition(a,b){
  var testing = parseInt(a) > 25 && parseInt(b) < 75;
  if(testing){
    return true;
  }else{
    return false;
  }
}

var limitOne = prompt('first limit');
var limitTwo = prompt('second limit');

document.write(testCondition(limitOne, limitTwo));
