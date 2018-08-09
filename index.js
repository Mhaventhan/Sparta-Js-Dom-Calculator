var num1,num2,operator;

// creating a variables to get element using DOM and store it under variable names
var calNumb = document.getElementsByClassName('buttonNum');
var disScreen = document.getElementById('screen');
var opSelect = document.getElementsByClassName('operator');
var ac = document.getElementById('clear');
var equal = document.getElementById('equals');



  for (var i = 0; i < calNumb.length; i++) {
    calNumb[i].addEventListener('click',function(){
      if (disScreen.innerHTML == "Sparta Calculator") {
        disScreen.innerHTML = this.innerHTML;
      }else{
        disScreen.innerHTML += this.innerHTML;
      }
    });

  };


for (var i = 0; i < opSelect.length; i++) {
  opSelect[i].addEventListener('click',function () {
    num1 = disScreen.innerHTML;
    operator = this.innerHTML;
    disScreen.innerHTML;

  });
};

equal.addEventListener('click',function () {
  num2 = disScreen.innerHTML;

})
