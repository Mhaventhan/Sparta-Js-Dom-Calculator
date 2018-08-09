var num1,num2,operator;

// creating a variables to get element using DOM and store it under variable names
var calNumb = document.getElementsByClassName('buttonNum');
var disScreen = document.getElementById('screen');
var opSelect = document.getElementsByClassName('operator');



  for (var i = 0; i < calNumb.length; i++) {
    calNumb[i].addEventListener('click',function(){
      if (disScreen.innerHTML == "Sparta Calculator") {
        disScreen.innerHTML = this.innerHTML;
      }else{
        disScreen.innerHTML += this.innerHTML;
      }
    });

  }

// after pressing operator
// save the value from the screen into num1
var num1= disScreen.innerHTML;
// disScreen.innerHTML= "";
// save the operator into operator


// if user presses equals

// assigned num2 the discreen.innerHTML
var num2= disScreen.innerHTML;
// =
  function addition(num1, operator, num2) {

}
