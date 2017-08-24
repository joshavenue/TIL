function alertRandom(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
}

// first way //

var alertRandom2 = function () {
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber2);
};

//second way //

alertRandom();
alertRandom2();

// both are similar //

