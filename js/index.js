var box = document.getElementById('display');

function toScreen(x){
  box.value += x;
  if(x === 'c'){
    box.value = ' ';
  }
}

function equals(){
  x = box.value;
  x = eval(x); 
  box.value = x;
}
function divisionby2(){
  x = box.value;
  x = x / 2;
  box.value = x;
}
function backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0,len);
  box.value = newNum;
}