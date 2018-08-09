var calNumb = document.getElementsByClassName('buttonNum');
var disScreen = document.getElementById('screen');
var opSelect = document.getElementsByClassName('operator');

function display() {
  disScreen.innerHTML = "";
  disScreen.innerHTML += this.innerHTML;
  }
